﻿using System;
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
            int QuizId = db.QuizSchedules.FirstOrDefault(z => z.QuizScheduleId == QuizScheduleId).QuizId;
            var userIds = db.UserSchedules.AsEnumerable()
                .Where(x => x.QuizId == QuizId)
                .Select(y => y.UserId).ToList();
            var users = db.Users
                .Where(x => !userIds.Contains(x.Id))
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
            return Ok(users);
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
            int QuizId = db.QuizSchedules.FirstOrDefault(x => x.QuizScheduleId == QuizScheduleId).QuizId;
            UserSchedule user = db.UserSchedules.SingleOrDefault(x => x.QuizScheduleId == QuizScheduleId && x.UserId == UserId && x.QuizId == QuizId);
            if (user.Taken == false)
            {
                db.UserSchedules.Remove(user);
                db.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest("CantDeleteUser");
            }
            
        }

        [HttpPost]
        [Route("api/UserSchedule/UserAdd/{QuizScheduleId}")]
        public IHttpActionResult UserAdd(int QuizScheduleId, [FromBody] string[] UserIds)
        {
            UserSchedule userSchedule = new UserSchedule();
            userSchedule.QuizScheduleId = QuizScheduleId;
            userSchedule.QuizId = db.QuizSchedules.FirstOrDefault(x => x.QuizScheduleId == QuizScheduleId).QuizId;
            userSchedule.Taken = false;
            foreach (var item in UserIds)
            { 
                userSchedule.UserId = item;
                db.UserSchedules.Add(userSchedule);
                db.SaveChanges();
            }
            var userEmails = db.Users.Where(x => UserIds.Contains(x.Id)).Select(y => y.Email).ToArray();
            var EmailResponse = InviteController.InviteUser(userEmails, "Click on the Link Below to take Quiz. \n <a href=\"" + "http://localhost:4200/?take-quiz=" + db.QuizSchedules.Single(x => x.QuizScheduleId == QuizScheduleId).QuizId +"&schedule-id="+ QuizScheduleId + "\">Click Here</a>");
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


        [HttpGet]
        [Route("api/UserSchedule/Status/{ScheduleId}/{UserId}")]
        public IHttpActionResult UserStatus(int QuizScheduleId, string UserId)
        {
            var user = db.UserSchedules.Where(x => x.QuizScheduleId == QuizScheduleId && x.UserId == UserId);
            if (User != null)
            {
                return Ok("true");
            }
            else
            {
                return BadRequest("false");
            }
        }

        [HttpPost]
        [Route("api/UserSchedule/ValidQuizTaker/{UserId}")]
        public IHttpActionResult ValidQuizTaker(string UserId, [FromBody]int QuizId)
        {
            var userSchedule = db.UserSchedules.FirstOrDefault(x => x.QuizId == QuizId && x.UserId == UserId);
            if (userSchedule != null)
            {
                return Ok();
            }
            else
            {
                return BadRequest("UserIsNotEligibleForThisQuiz");
            }
        }
    }
}