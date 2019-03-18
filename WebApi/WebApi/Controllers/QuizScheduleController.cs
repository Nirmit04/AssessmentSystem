using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class QuizScheduleController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        [Route("api/QuizSchedule/GetAllQuizSchedule/{CreatedBy}")]
        public IHttpActionResult GetQuiz(string CreatedBy)
        {
            var quizSchedule = db.QuizSchedules.Where(x => x.CreatedBy == CreatedBy && x.ArchiveStatus == false)
                .Select(x => new
                {
                    QuizScheduleId = x.QuizScheduleId,
                    StartDateTime = x.StartDateTime,
                    EndDateTime = x.EndDateTime,
                    QuizId = x.QuizId,
                    ArchiveStatus = x.ArchiveStatus,
                }).ToList();
            return Ok(quizSchedule);
        }

        [HttpPost]
        [Route("api/QuizSchedule/ScheduleQuiz")]
        public IHttpActionResult ScheduleQuiz(QuizSchedule quizSchedule)
        {
            db.QuizSchedules.Add(quizSchedule);
            UserSchedule userSchedule = new UserSchedule();
            foreach (var uId in quizSchedule.UserId)
            {
                userSchedule.UserId = uId;
                userSchedule.QuizScheduleId = quizSchedule.QuizScheduleId;
                userSchedule.Taken = false;
                db.UserSchedules.Add(userSchedule);
                db.SaveChanges();
            }
            db.SaveChanges();
            return Ok(quizSchedule);
        }

        [HttpPut]
        [Route("api/QuizSchedule/EditQuizSchedule/{QuizScheduleId}")]
        public IHttpActionResult EditQuizSchedule(int? QuizScheduleId, QuizSchedule newQuizSchedule)
        {
            if (QuizScheduleId == null)
            {
                return BadRequest();
            }
            var quizSchedule = db.QuizSchedules.Find(QuizScheduleId);
            quizSchedule.StartDateTime = newQuizSchedule.StartDateTime;
            quizSchedule.EndDateTime = newQuizSchedule.EndDateTime;
            quizSchedule.ArchiveStatus = newQuizSchedule.ArchiveStatus;
            quizSchedule.QuizId = newQuizSchedule.QuizId;
            db.SaveChanges();
            return StatusCode(HttpStatusCode.OK);
        }

        [HttpDelete]
        [Route("api/QuizSchedule/DeleteQuizSchedule/{QuizScheduleId}")]
        public IHttpActionResult DeleteQuizSchedule(int QuizScheduleId)
        {
            var quizSchedule = db.QuizSchedules.Find(QuizScheduleId);
            quizSchedule.ArchiveStatus = true;
            db.SaveChanges();
            return Ok();
        }

    }
}
