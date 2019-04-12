using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class QuizScheduleController : ApiController
    { 
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();

        /// <summary>
        /// Returns all the schedules created by that user
        /// </summary>
        /// <param name="CreatedBy"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/QuizSchedule/GetAllQuizSchedule/{CreatedBy}")]
        public IHttpActionResult GetAllQuizSchedule(string CreatedBy)
        {
            if (!helper.ValidateUserId(CreatedBy))
            {
                return BadRequest("Invalid Id");
            }
            var quizSchedule = db.QuizSchedules.Where(x => x.CreatedBy == CreatedBy && x.ArchiveStatus == false)
                .Select(x => new
                {
                    QuizScheduleId = x.QuizScheduleId,
                    StartDateTime = x.StartDateTime,
                    EndDateTime = x.EndDateTime,
                    QuizId = x.QuizId,
                    QuizName = db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                    ArchiveStatus = x.ArchiveStatus,
                })
                .OrderByDescending(z=>z.QuizScheduleId)
                .ToList();
            return Ok(quizSchedule);
        }

        /// <summary>
        /// Creates a Quiz Schedule
        /// </summary>
        /// <param name="quizSchedule">QuizSchedule Model</param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/QuizSchedule/ScheduleQuiz")]
        public IHttpActionResult ScheduleQuiz(QuizSchedule quizSchedule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            db.QuizSchedules.Add(quizSchedule);
            db.SaveChanges();
            return StatusCode(HttpStatusCode.Created);
        }

        /// <summary>
        /// Edit a existing Quiz Schedule
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <param name="newQuizSchedule"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/QuizSchedule/EditQuizSchedule/{QuizScheduleId}")]
        public IHttpActionResult EditQuizSchedule(int QuizScheduleId, QuizSchedule newQuizSchedule)
        {
            if (!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid Id");
            }
            var quizSchedule = db.QuizSchedules.Find(QuizScheduleId);
            quizSchedule.StartDateTime = newQuizSchedule.StartDateTime;
            quizSchedule.EndDateTime = newQuizSchedule.EndDateTime;
            quizSchedule.ArchiveStatus = newQuizSchedule.ArchiveStatus;
            quizSchedule.QuizId = newQuizSchedule.QuizId;
            db.SaveChanges();
            return StatusCode(HttpStatusCode.OK);
        }

        /// <summary>
        /// Archives a schedule only if all the users have similar taken status
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("api/QuizSchedule/DeleteQuizSchedule/{QuizScheduleId}")]
        public IHttpActionResult DeleteQuizSchedule(int QuizScheduleId)
        {
            var quizSchedule = db.QuizSchedules.Find(QuizScheduleId);
            if(!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid Id");
            }
            var userScheduleTrue = db.UserSchedules.Where(x => x.QuizScheduleId == QuizScheduleId).All(z => z.Taken == true);
            var userScheduleFalse = db.UserSchedules.Where(x => x.QuizScheduleId == QuizScheduleId).All(z => z.Taken == false);
            if (userScheduleTrue == true && userScheduleFalse == true)
            {
                quizSchedule.ArchiveStatus = true;
                db.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest("Not All Users Have Similar Taken Status");
            }
        }
        /// <summary>
        /// Returns the list of Archived Schedules
        /// </summary>
        /// <param name="CreatedBy">UserId</param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/QuizSchedule/ArchivedList/{CreatedBy}")]
        public IHttpActionResult ArchivedList(string CreatedBy)
        {
            if (!helper.ValidateUserId(CreatedBy))
            {
                return BadRequest("Invalid Id");
            }
            var quizSchedule = db.QuizSchedules
                .Where(x => x.CreatedBy == CreatedBy && x.ArchiveStatus == true)
                .Select(y => new
                {
                    QuizScheduleId = y.QuizScheduleId,
                    StartDateTime = y.StartDateTime,
                    EndDateTime = y.EndDateTime,
                    QuizId = y.QuizId,
                    QuizName = db.Quizs.FirstOrDefault(z => z.QuizId == y.QuizId).QuizName,
                    ArchiveStatus = y.ArchiveStatus
                }).ToList();
            return Ok(quizSchedule);
        }
       
        /// <summary>
        /// Used to unarchive an Archived Quiz
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("api/QuizSchedule/Unarchive/{QuizScheduleId}")]
        public IHttpActionResult Unarchive(int QuizScheduleId)
        {
            if (!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid Id");
            }
            var quizSchedule = db.QuizSchedules.Find(QuizScheduleId);
            quizSchedule.ArchiveStatus = false;
            db.SaveChanges();
            return Ok();
        }

        /// <summary>
        /// Returns the number of schedules created by the user
        /// </summary>
        /// <param name="CreatedBy"> User Id</param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/QuizSchedule/Stats/{CreatedBy}")]
        public IHttpActionResult Stats(string CreatedBy)
        {
            if (!helper.ValidateUserId(CreatedBy))
            {
                return BadRequest("Invalid Id");
            }
            int testSchdeule = db.QuizSchedules.Where(x => x.CreatedBy == CreatedBy).Count();
            return Ok(testSchdeule);
        }
        
    }
}
