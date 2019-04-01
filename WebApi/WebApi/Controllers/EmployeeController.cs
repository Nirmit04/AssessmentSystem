
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        /**
         * This method is used to find the list of quiz assigned to that particular user
         * @Params- UserId of string type
         * @Returns -List of quizzes assigned.
         * **/
        [HttpGet]
        [Route("api/Employee/NonMock/{UserId}")]
        public IHttpActionResult GetNonMockQuiz(string UserId)
        {
            var quizzesScheduled = db.UserSchedules
                .Where(x => x.UserId == UserId && x.Taken == false)
                .Select(x => new
                {
                    x.QuizScheduleId,
                    x.QuizId,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId && y.QuizType == "Non-Mock").QuizName,
                    db.QuizSchedules.FirstOrDefault(y => y.QuizScheduleId == x.QuizScheduleId).StartDateTime,
                    db.QuizSchedules.FirstOrDefault(y => y.QuizScheduleId == x.QuizScheduleId).EndDateTime
                })
                .ToList();
            return Ok(quizzesScheduled);
        }


        [HttpGet]
        [Route("api/Employee/Stats/{UserId}")]
        public IHttpActionResult Stats(string UserId)
        {
            Dictionary<string, string> employeeStats = new Dictionary<string, string>();
            var MockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock").Count();
            var NonMockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Non-Mock").Count();
            decimal TotalAccuracy = 0.00m;
            string recentActivity="----";
            try
            {
                TotalAccuracy = db.Reports.Where(x => x.UserId == UserId).Select(y => y.Accuracy).Sum() / (MockCount + NonMockCount);
                var QuizId = db.UserSchedules.OrderByDescending(x => x.UserScheduleId).FirstOrDefault(x => x.UserId == UserId && x.Taken==true).QuizId;
                recentActivity = db.Quizs.FirstOrDefault(x => x.QuizId == QuizId).QuizName;
            }
            catch (Exception) { }
            
            employeeStats.Add("Mock", MockCount.ToString());
            employeeStats.Add("NonMock", NonMockCount.ToString());
            employeeStats.Add("Accuracy", String.Format("{0:f2}",TotalAccuracy));
            employeeStats.Add("RecentActivity", recentActivity);
            return Ok(employeeStats);
        }
    }
}
