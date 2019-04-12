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
    public class ReportController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();

        /// <summary>
        /// Returns all the non mock quiz reports of a particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Report/Scheduled/{UserId}")]
        public IHttpActionResult GetScheduledReport(string UserId)
        {
            
            var report = db.Reports.Where(x => x.UserId == UserId && x.QuizType== "Scheduled")
                .Select(x => new
                {
                    x.ReportId,
                    x.Accuracy,
                    x.CorrectAnswers,
                    x.QuizId,
                    x.TimeTaken,
                    x.MarksScored,
                    x.UnattemptedAnswers,
                    x.WrongAnswers,
                    x.UserId,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).TotalMarks
                })
                .OrderByDescending(z => z.ReportId)
                .ToList();
            return Ok(report);
        }

        /// <summary>
        /// Returns all the non mock quiz reports of a particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Report/Mock/{UserId}")]
        public IHttpActionResult GetMockReport(string UserId)
        {
            var report = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock")
                .Select(x => new
                {
                    x.ReportId,
                    x.Accuracy,
                    x.CorrectAnswers,
                    x.QuizId,
                    x.TimeTaken,
                    x.MarksScored,
                    x.UnattemptedAnswers,
                    x.WrongAnswers,
                    x.UserId,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).TotalMarks
                })
                .OrderByDescending(z => z.ReportId)
                .ToList();
            return Ok(report);
        }
    }
}
