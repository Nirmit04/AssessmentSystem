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
    public class UserScheduleController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();

        /// <summary>
        /// Returns the users which are not present/scheduled in a particular Schedule
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/UserSchedule/UserNotAssignedQuiz/{QuizScheduleId}")]
        public IHttpActionResult UserNotAssignedQuiz(int QuizScheduleId)
        {
            if(!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid Id");
            }
            int QuizId = db.QuizSchedules.FirstOrDefault(z => z.QuizScheduleId == QuizScheduleId).QuizId;
            var userIds = db.UserSchedules.AsEnumerable()
                .Where(x => x.QuizId == QuizId)
                .Select(y => y.UserId).ToList();
            var users = db.Users
                .Where(x => !userIds.Contains(x.Id))
                .Select(z => new
                {
                    z.Id,
                    z.UserName,
                    z.FirstName,
                    z.LastName,
                    z.Email,
                    z.ImageURL,
                    z.GoogleId
                }).ToList();
            return Ok(users);
        }

        /// <summary>
        /// Returns all the users which are assigned in that Schedule
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/UserSchedule/UserAssignedQuiz/{QuizScheduleId}")]
        public IHttpActionResult UserAssignedQuiz(int QuizScheduleId)
        {
            if (!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid Id");
            }
            var userScheduleUserIds = db.UserSchedules.AsEnumerable()
                .Where(x => x.QuizScheduleId == QuizScheduleId)
                .Select(y => y.UserId).ToList();
            var users = db.Users
                .Where(x => userScheduleUserIds.Contains(x.Id))
                .Select(z => new
                {
                    z.Id,
                    z.UserName,
                    z.FirstName,
                    z.LastName,
                    z.Email,
                    z.ImageURL,
                    z.GoogleId,
                    QuizTaken = db.UserSchedules.FirstOrDefault(x => x.UserId == z.Id && x.QuizScheduleId == QuizScheduleId).Taken
                }).ToList();
            if (users.Count() > 0)
                return Ok(users);
            else
                return Ok("null");

        }

        /// <summary>
        /// Used to remove a user from a schedule only if the user has not taken the Scheduled Quiz
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("api/UserSchedule/UserDelete/{QuizScheduleId}/{UserId}")]
        public IHttpActionResult UserDelete(int QuizScheduleId, string UserId)
        {
            if ((!helper.ValidateQuizSchedule(QuizScheduleId)) || (!helper.ValidateUserId(UserId)))
            {
                return BadRequest("Invalid Id");
            }
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

        /// <summary>
        /// Adds new user in a Schedule 
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <param name="UserIds"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/UserSchedule/UserAdd/{QuizScheduleId}")]
        public IHttpActionResult UserAdd(int QuizScheduleId, [FromBody] string[] UserIds)
        {
            if (!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid Id");
            }
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
            var quizId = db.QuizSchedules.Single(x => x.QuizScheduleId == QuizScheduleId).QuizId;
            var time = db.Quizs.Single(y => y.QuizId == quizId).QuizTime;
            var EmailResponse = helper.InviteUser(userEmails, "Click on the Link Below to take Quiz. \n <a href=\"" + "http://localhost:4200/?take-quiz=" + quizId +"&schedule-id="+ QuizScheduleId + "&time="+ time +"\">Click Here</a>");
            return Ok();
        }

        /// <summary>
        /// Changes the quiz status of that user to attempted
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/UserSchedule/QuizAttemptStatus/{QuizScheduleId}/{UserId}")]
        public IHttpActionResult QuizAttemptStatus(int QuizScheduleId, string UserId)
        {
            if ((!helper.ValidateQuizSchedule(QuizScheduleId)) || (!helper.ValidateUserId(UserId)))
            {
                return BadRequest("Invalid Id");
            }
            var user = db.UserSchedules.SingleOrDefault(x => x.QuizScheduleId == QuizScheduleId && x.UserId == UserId);
            user.Taken = true;
            db.SaveChanges();
            return Ok();
        }

        /// <summary>
        /// Returns UserStatus of a particular QuizSchedule
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Validates whether the user is permitted to attempt a quiz
        /// </summary>
        /// <param name="UserId"></param>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/UserSchedule/ValidQuizTaker/{UserId}")]
        public IHttpActionResult ValidQuizTaker(string UserId, [FromBody]int QuizId)
        {
            var userSchedule = db.UserSchedules.FirstOrDefault(x => x.QuizId == QuizId && x.UserId == UserId && x.Taken == false);
            if (userSchedule != null)
            {
                var quizSchedule = db.QuizSchedules.FirstOrDefault(x => x.QuizId == QuizId && x.QuizScheduleId == userSchedule.QuizScheduleId);
                if (DateTime.Now >= quizSchedule.StartDateTime && DateTime.Now <= quizSchedule.EndDateTime)
                {
                    return Ok();
                }
                else if (DateTime.Now < quizSchedule.StartDateTime)
                {
                    return BadRequest("Quiz has not Started");
                }
                else
                {
                    quizSchedule.ArchiveStatus = true;
                    userSchedule.Taken = true;
                    return BadRequest("Quiz has Expired");
                }
            }
            else
            {
                return BadRequest("UserIsNotEligibleForThisQuiz");
            }
        }
    }
}
