using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/Employee")]
    [Authorize]
    public class EmployeeController : ApiController
    {
        private HelperClass helper = new HelperClass();
        private IEmployee rEmployee = new REmployee();

        /// <summary>
        /// Returns the list of Scheduled quiz assigned to that particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("QuizScheduled/{UserId}")]
        public async Task<IHttpActionResult> GetScheduledQuiz([FromUri]string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            var quizzesScheduled = await rEmployee.GetUserSchedules(UserId);
            foreach (var item in quizzesScheduled)
            {
                if (DateTime.UtcNow < item.StartDateTime)
                {
                    quizzesScheduled.ToList().Remove(item);
                }
                if (DateTime.UtcNow > item.EndDateTime)
                {
                    await rEmployee.UpdateExpiredSchedules(item.UserScheduleId, item.QuizScheduleId);
                    quizzesScheduled.ToList().Remove(item);
                }
            }
            return Ok(quizzesScheduled.OrderByDescending(y => y.UserScheduleId));
        }

        /// <summary>
        /// Returns the stats of the user such as number of mock, non mock quiz taken and the accuracy of the user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Stats/{UserId}")]
        public async Task<IHttpActionResult> Stats([FromUri]string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            Dictionary<string, string> employeeStats = new Dictionary<string, string>();
            var mockCount = await rEmployee.GetQuizTypeCount(UserId, "Mock");
            var scheduledCount = await rEmployee.GetQuizTypeCount(UserId, "Scheduled");
            decimal totalAccuracy = 0.00m;
            string recentActivity = "------";
            try
            {
                totalAccuracy = await rEmployee.GetAccuracySum(UserId) / (mockCount + scheduledCount);
                recentActivity = await rEmployee.RecentQuizTakenName(UserId);
            }
            catch (Exception) { }

            employeeStats.Add("Mock", mockCount.ToString());
            employeeStats.Add("Scheduled", scheduledCount.ToString());
            employeeStats.Add("Accuracy", String.Format("{0:f2}", totalAccuracy));
            employeeStats.Add("RecentActivity", recentActivity);
            return Ok(employeeStats);
        }

    }
}

