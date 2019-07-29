using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/QuizSchedule")]
    [Authorize]
    public class QuizScheduleController : ApiController
    { 
        private HelperClass helper = new HelperClass();
        private IQuizSchedule rQuizSchedule = new RQuizSchedule();

        /// <summary>
        /// Returns all the schedules created by that user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{UserId}")]
        public async Task<IHttpActionResult> GetQuizScheduleByUsers([FromUri]string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid Id");
            }
            var quizSchedule = await rQuizSchedule.GetQuizScheduleByUsersStatus(UserId, false);
            return Ok(quizSchedule);
        }

        /// <summary>
        /// Creates a Quiz Schedule
        /// </summary>
        /// <param name="quizSchedule">QuizSchedule Model</param>
        /// <returns></returns>
        [HttpPost]
        [Route]
        public async Task<IHttpActionResult> CreateQuizSchedule([FromBody]QuizSchedule quizSchedule)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var resultQuizScheduleCreation = await rQuizSchedule.CreateQuizSchedule(quizSchedule);
                    if (resultQuizScheduleCreation > 0)
                    {
                        return Content(HttpStatusCode.Created, quizSchedule);
                    }
                    else
                    {
                        return BadRequest("Not Created");
                    }
                }
                else
                {
                    return BadRequest("Invalid ModelState");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }
        }

        /// <summary>
        /// Edit a existing Quiz Schedule
        /// </summary>
        /// <param name="quizSchedule">Model</param>
        /// <param name="QuizScheduleId">Mandatory</param>
        /// <returns></returns>
        [HttpPut]
        [Route("{QuizScheduleId}")]
        public async Task<IHttpActionResult> UpdateQuizSchedule([FromUri]int QuizScheduleId, [FromBody]QuizSchedule quizSchedule)
        {
            if (QuizScheduleId != quizSchedule.QuizScheduleId)
            {
                return BadRequest("Invalid SubjectId");
            }
            if (ModelState.IsValid)
            {
                var resultQuizScheduleUpdation = await rQuizSchedule.UpdateQuizSchedule(quizSchedule);
                if (resultQuizScheduleUpdation > 0)
                {
                    return Content(HttpStatusCode.Accepted, quizSchedule);
                }
                else
                {
                    return StatusCode(HttpStatusCode.NotModified);
                }
            }
            else
            {
                return BadRequest("Invalid ModelState");
            }
        }

        /// <summary>
        /// Archives a schedule only if all the users have similar taken status
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("{QuizScheduleId}")]
        public async Task<IHttpActionResult> DeleteQuizSchedule([FromUri]int QuizScheduleId)
        {
            if(!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid QuizScheduleId");
            }
            var resultQuizScheduleDeletion = await rQuizSchedule.DeleteQuizSchedule(QuizScheduleId);
            if (resultQuizScheduleDeletion != null)
            {
                return Ok(resultQuizScheduleDeletion);
            }
            else
            {
                return BadRequest("Dissimilar Taken Status");
            }
        }

        /// <summary>
        /// Returns the list of Archived Schedules
        /// </summary>
        /// <param name="UserId">UserId</param>
        /// <returns></returns>
        [HttpGet]
        [Route("Archived/{UserId}")]
        public async Task<IHttpActionResult> GetAllArchviedQuizSchedules(string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            var quizScheduleList = await rQuizSchedule.GetQuizScheduleByUsersStatus(UserId, true);
            return Ok(quizScheduleList);
        }
       
        /// <summary>
        /// Used to unarchive an Archived Quiz
        /// </summary>
        /// <param name="QuizScheduleId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("Unarchive/{QuizScheduleId}")]
        public async Task<IHttpActionResult> UnarchiveQuizSchedule(int QuizScheduleId)
        {
            if (!helper.ValidateQuizSchedule(QuizScheduleId))
            {
                return BadRequest("Invalid QuizScheduleId");
            }
            var quizSchedule = await rQuizSchedule.GetQuizScheduleById(QuizScheduleId);
            var resultUnarchive = await rQuizSchedule.UnarchiveQuizSchedule(quizSchedule);
            if (resultUnarchive > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            } 
        }

        /// <summary>
        /// Returns the number of schedules created by the user
        /// </summary>
        /// <param name="UserId"> User Id</param>
        /// <returns></returns>
        [HttpGet]
        [Route("Stats/{UserId}")]
        public async Task<IHttpActionResult> Stats(string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            int quizScheduleCount = await rQuizSchedule.GetQuizScheduleCountByUsers(UserId);
            return Ok(quizScheduleCount);
        }
        
    }
}
