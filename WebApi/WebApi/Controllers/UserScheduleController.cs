using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/UserSchedule")]
    [Authorize]
    public class UserScheduleController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();
        private IQuiz rQuiz = new RQuiz();
        private IQuizSchedule rQuizSchedule = new RQuizSchedule();
        private IUserSchedule rUserSchedule = new RUserSchedule();
        private IUser rUser = new RUser();

        /// <summary>
        /// Returns the users which are not present/scheduled in a particular Schedule
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("UserNotAssignedQuiz/{QuizScheduleId}")]
        public async Task<IHttpActionResult> UserNotAssignedQuiz([FromUri]int QuizScheduleId)
        {
            if(!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid QuizScheduleId");
            }
            var quizSchedule = await rQuizSchedule.GetQuizScheduleById(QuizScheduleId);
            var userIds = await rUserSchedule.GetUserScheduleUserIdsByQuizId(quizSchedule.QuizId);
            var userList = await rUser.GetUsersByUserIdsNotAssignedQuiz(userIds);
            return Ok(userList);
        }

        /// <summary>
        /// Returns all the users which are assigned in that Schedule
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("UserAssignedQuiz/{QuizScheduleId}")]
        public async Task<IHttpActionResult> UserAssignedQuiz([FromUri]int QuizScheduleId)
        {
            if (!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid QuizScheduleId");
            }
            var userIds = await rUserSchedule.GetUserScheduleUserIdsByQuizScheduleId(QuizScheduleId);
            var users = await rUser.GetUsersByUserIdsAssignedQuiz(userIds, QuizScheduleId);
            return Ok(users);
        }

        /// <summary>
        /// Used to remove a user from a schedule only if the user has not taken the Scheduled Quiz
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("{QuizScheduleId}/{UserId}")]
        public async Task<IHttpActionResult> UserScheduleDelete([FromUri]int QuizScheduleId, [FromUri]string UserId)
        {
            if ((!helper.ValidateQuizSchedule(QuizScheduleId)) || (!helper.ValidateUserId(UserId)))
            {
                return BadRequest("Invalid Id");
            }
            var quizSchedule = await rQuizSchedule.GetQuizScheduleById(QuizScheduleId);
            UserSchedule userSchedule = await rUserSchedule.GetUserSchedule(QuizScheduleId, UserId, quizSchedule.QuizId);
            if (userSchedule.Taken == false)
            {
                var resultUserScheduleDeletion = await rUserSchedule.DelteUserSchedule(userSchedule);
                if (resultUserScheduleDeletion > 0)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest("Can't Delete User");
            }   
        }

        /// <summary>
        /// Adds new user in a Schedule 
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <param name="UserIds"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("{QuizScheduleId}")]
        public async Task<IHttpActionResult> AddUserSchedule([FromUri]int QuizScheduleId, [FromBody] string[] UserIds)
        {
            if (!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid Id");
            }
            var quizSchedule = await rQuizSchedule.GetQuizScheduleById(QuizScheduleId);
            UserSchedule userSchedule = new UserSchedule()
            {
                QuizScheduleId = QuizScheduleId,
                QuizId = quizSchedule.QuizId,
                Taken = false
            };
            foreach (var item in UserIds)
            { 
                userSchedule.UserId = item;
                var resultUserScheduleCreation = await rUserSchedule.CreateUserSchedule(userSchedule);
                if (resultUserScheduleCreation == 0)
                {
                    return BadRequest("Something went Wrong !");
                }
            }
            var userEmails = await rUser.GetAllUserEmails(UserIds);
            var quiz = await rQuiz.GetQuizById(quizSchedule.QuizId);
            var Time = quiz.QuizTime;
            var EmailResponse = helper.InviteUser(userEmails, "Click on the Link Below to take Quiz. \n <a href=\"" + "http://localhost:4200/?take-quiz=" + quiz.QuizId +"&schedule-id="+ QuizScheduleId + "&time="+ Time +"\">Click Here</a>");
            return Ok();
        }

        /// <summary>
        /// Changes the quiz status of that user to attempted
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <param name="UserId"></param>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("QuizAttemptStatus/{QuizScheduleId}/{UserId}/{QuizId}")]
        public async Task<IHttpActionResult> QuizAttemptStatus([FromUri]int QuizScheduleId, [FromUri]string UserId, [FromUri]int QuizId)
        {
            if ((!helper.ValidateQuizSchedule(QuizScheduleId)) || (!helper.ValidateUserId(UserId)) || (!helper.ValidateQuizId(QuizId)))
            {
                return BadRequest("Invalid Id");
            }
            var userSchedule = await rUserSchedule.GetUserSchedule(QuizScheduleId, UserId, QuizId);
            var resultUserScheduleTakenStatusUpdation = await rUserSchedule.UpdateUserScheduleTakenStatus(userSchedule);
            if (resultUserScheduleTakenStatusUpdation == 0)
            {
                return BadRequest();
            }
            return Ok();
        }

        /// <summary>
        /// Validates whether the user is permitted to attempt a quiz
        /// </summary>
        /// <param name="UserId"></param>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("ValidQuizTaker/{UserId}")]
        public async Task<IHttpActionResult> ValidQuizTaker(string UserId, [FromBody]int QuizId)
        {
            var userSchedule = await rUserSchedule.ValidateUserSchedule(QuizId, UserId, false);
            if (userSchedule != null)
            {
                var quizSchedule = await rQuizSchedule.GetQuizScheduleById(userSchedule.QuizScheduleId);
                if (DateTime.UtcNow >= quizSchedule.StartDateTime && DateTime.UtcNow <= quizSchedule.EndDateTime)
                {
                    return Ok();
                }
                else if (DateTime.UtcNow < quizSchedule.StartDateTime)
                {
                    return BadRequest("Quiz has not Started");
                }
                else
                {
                    await rQuizSchedule.InValidateSchedule(quizSchedule, userSchedule);
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
