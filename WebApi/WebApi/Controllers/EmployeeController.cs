
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Script.Serialization;
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
        [Route("api/Employee/Scheduled/{UserId}")]
        public IHttpActionResult GetScheduledQuiz(string UserId)
        {
            var quizzesScheduled = db.UserSchedules
                .Where(x => x.UserId == UserId && x.Taken == false)
                .Select(x => new
                {
                    x.UserScheduleId,
                    x.QuizScheduleId,
                    x.QuizId,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId && y.QuizType == "Scheduled").QuizName,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId && y.QuizType == "Scheduled").QuizTime,
                    db.QuizSchedules.FirstOrDefault(y => y.QuizScheduleId == x.QuizScheduleId).StartDateTime,
                    db.QuizSchedules.FirstOrDefault(y => y.QuizScheduleId == x.QuizScheduleId).EndDateTime
                })
                .ToList();
            foreach (var item in quizzesScheduled)
            {
                if (DateTime.Now > item.EndDateTime)
                {
                    var userSchedule = db.UserSchedules.FirstOrDefault(x => x.UserScheduleId == item.UserScheduleId);
                    var quizSchedule = db.QuizSchedules.FirstOrDefault(x => x.QuizScheduleId == item.QuizScheduleId);
                    userSchedule.Taken = true;
                    quizSchedule.ArchiveStatus = true;
                    db.SaveChanges();
                    quizzesScheduled.Remove(item);
                }
            }
            return Ok(quizzesScheduled.OrderByDescending(y => y.UserScheduleId));
        }


        [HttpGet]
        [Route("api/Employee/Stats/{UserId}")]
        public IHttpActionResult Stats(string UserId)
        {
            Dictionary<string, string> employeeStats = new Dictionary<string, string>();
            var MockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock").Count();
            var ScheduledCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Scheduled").Count();
            decimal TotalAccuracy = 0.00m;
            string recentActivity = "-----";
            try
            {
                TotalAccuracy = db.Reports.Where(x => x.UserId == UserId).Select(y => y.Accuracy).Sum() / (MockCount + ScheduledCount);
                var QuizId = db.UserSchedules.OrderByDescending(x => x.UserScheduleId).FirstOrDefault(x => x.UserId == UserId && x.Taken == true).QuizId;
                recentActivity = db.Quizs.FirstOrDefault(x => x.QuizId == QuizId).QuizName;
            }
            catch (Exception) { }

            employeeStats.Add("Mock", MockCount.ToString());
            employeeStats.Add("Scheduled", ScheduledCount.ToString());
            employeeStats.Add("Accuracy", String.Format("{0:f2}", TotalAccuracy));
            employeeStats.Add("RecentActivity", recentActivity);
            return Ok(employeeStats);
        }

        [HttpPost, Microsoft.AspNetCore.Mvc.DisableRequestSizeLimit]
        [Route("api/Employee/Sample")]
        public IHttpActionResult Sample()
        {
            string imageName = null;
            var httpRequest = HttpContext.Current.Request;
            var postedFile = httpRequest.Files["Image"];
            var data = new JavaScriptSerializer().Deserialize<Sample>(httpRequest.Form["QuestionDetails"]);
            System.Diagnostics.Debug.WriteLine(data.QuestionStatement);
            if (postedFile != null)
            {
                var ImageDirectoryUrl = HttpContext.Current.Server.MapPath("/Images/");
                imageName = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).ToArray()).Replace(" ", "-");
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
                var filePath = ImageDirectoryUrl + imageName;
                postedFile.SaveAs(filePath);
            }
            return Ok();
            }
        }
    }

