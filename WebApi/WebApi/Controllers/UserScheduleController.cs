using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class UserScheduleController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        [Route("api/UserSchedule/UserNotAssignedQuiz/{QuizScheduleId}")]
        public IHttpActionResult UserNotAssignedQuiz(int QuizScheduleId)
        {
            var userScheduleUserIds = db.UserSchedules.AsEnumerable()
                .Where(x => x.QuizScheduleId == QuizScheduleId)
                .Select(y => y.UserId).ToList();
            var userIds = db.Users
                .Where(x => !userScheduleUserIds.Contains(x.Id))
                .Select(z => new
                {
                    Id = z.Id,
                    UserName = z.UserName,
                    FirstName = z.FirstName,
                    LastName = z.LastName,
                    Email = z.Email,
                    ImageURL = z.ImageURL,
                    GoogleId = z.GoogleId
                }).ToList();
            return Ok(userIds);
        }

        [HttpGet]
        [Route("api/UserSchedule/UserAssignedQuiz/{QuizScheduleId}")]
        public IHttpActionResult UserAssignedQuiz(int QuizScheduleId)
        {
            var userScheduleUserIds = db.UserSchedules.AsEnumerable()
                .Where(x => x.QuizScheduleId == QuizScheduleId)
                .Select(y => y.UserId).ToList();
            var userIds = db.Users
                .Where(x => userScheduleUserIds.Contains(x.Id))
                .Select(z => new
                {
                    Id = z.Id,
                    UserName = z.UserName,
                    FirstName = z.FirstName,
                    LastName = z.LastName,
                    Email = z.Email,
                    ImageURL = z.ImageURL,
                    GoogleId = z.GoogleId,
                    QuizTaken = db.UserSchedules.Where(x => x.UserId == z.Id && x.QuizScheduleId == QuizScheduleId).Select(y => y.Taken)
                }).ToList();
            return Ok(userIds);
        }

        [HttpDelete]
        [Route("api/UserSchedule/UserDelete/{QuizScheduleId}/{UserId}")]
        public IHttpActionResult UserDelete(int QuizScheduleId, string UserId)
        {
            UserSchedule user = db.UserSchedules.SingleOrDefault(x => x.QuizScheduleId == QuizScheduleId && x.UserId == UserId);
            db.UserSchedules.Remove(user);
            db.SaveChanges();
            return Ok();
        }

        [HttpPost]
        [Route("api/UserSchedule/UserAdd/{QuizScheduleId}")]
        public IHttpActionResult UserAdd(int QuizScheduleId, [FromBody] string[] UserIds)
        {
            UserSchedule userSchedule = new UserSchedule();
            userSchedule.QuizScheduleId = QuizScheduleId;
            userSchedule.Taken = false;
            foreach (var item in UserIds)
            {
                userSchedule.UserId = item;
                db.UserSchedules.Add(userSchedule);
                db.SaveChanges();
            }
            return Ok();
        }

        [HttpPut]
        [Route("api/UserSchedule/QuizAttemptStatus/{QuizScheduleId}/{UserId}")]
        public IHttpActionResult QuizAttemptStatus(int QuizScheduleId, string UserId)
        {
            var user = db.UserSchedules.SingleOrDefault(x => x.QuizScheduleId == QuizScheduleId && x.UserId == UserId);
            user.Taken = true;
            db.SaveChanges();
            return Ok();
        }
    }
}
