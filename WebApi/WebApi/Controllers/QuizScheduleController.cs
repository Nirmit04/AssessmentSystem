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
        public IHttpActionResult GetAllQuizSchedule(string CreatedBy)
        {
            var quizSchedule = db.QuizSchedules.Where(x => x.CreatedBy == CreatedBy && x.ArchiveStatus == false)
                .Select(x => new
                {
                    QuizScheduleId = x.QuizScheduleId,
                    StartDateTime = x.StartDateTime,
                    EndDateTime = x.EndDateTime,
                    QuizId = x.QuizId,
                    QuizName = db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                    ArchiveStatus = x.ArchiveStatus,
                }).ToList();
            return Ok(quizSchedule);
        }

        [HttpPost]
        [Route("api/QuizSchedule/ScheduleQuiz")]
        public IHttpActionResult ScheduleQuiz(QuizSchedule quizSchedule)
        {
            db.QuizSchedules.Add(quizSchedule);
            db.SaveChanges();
            UserSchedule userSchedule = new UserSchedule();
            foreach (var uId in quizSchedule.UserId)
            {
                userSchedule.UserId = uId;
                userSchedule.QuizScheduleId = quizSchedule.QuizScheduleId;
                userSchedule.Taken = false;
                db.UserSchedules.Add(userSchedule);
                db.SaveChanges();
            }
            var userEmails = db.Users.Where(x => quizSchedule.UserId.Contains(x.Id)).Select(y => y.Email).ToArray();
            var EmailResponse = InviteController.InviteUser(userEmails, "Click on the Link Below to take Quiz. \n <a href=\"" + "http://c6f0a0ba.ngrok.io/api/QuizSchedule/GetAllQuizSchedule/" + quizSchedule.CreatedBy + "\">Click Here</a>");
            if (EmailResponse == "Invite Sent")
                return Ok(quizSchedule);
            else
                return BadRequest("Try Again !!!");
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

        [HttpGet]
        [Route("api/QuizSchedule/ArchivedList/{CreatedBy}")]
        public IHttpActionResult ArchivedList(string CreatedBy)
        {
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

        [HttpDelete]
        [Route("api/QuizSchedule/Unarchive/{QuizScheduleId}")]
        public IHttpActionResult Unarchive(int QuizScheduleId)
        {
            var quizSchedule = db.QuizSchedules.Find(QuizScheduleId);
            quizSchedule.ArchiveStatus = false;
            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [Route("api/QuizSchedule/Stats/{CreatedBy}")]
        public IHttpActionResult Stats(string CreatedBy)
        {
            int testSchdeule = db.QuizSchedules.Where(x => x.CreatedBy == CreatedBy).Count();
            return Ok(testSchdeule);
        }

    }
}
