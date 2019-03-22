using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ReportController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        [Route("api/Report/NonMock/{UserId}")]
        public IHttpActionResult GetNonMockReport(string UserId)
        {
            var report = db.Reports.Where(x => x.UserId == UserId && x.QuizType=="Non-Mock").Select(x => new
            {
                x.Accuracy,
                x.CorrectAnswers,
                x.Efficiency,
                x.QuizId,
                x.ReportId,
                x.TimeTaken,
                x.MarksScored,
                x.UnattemptedAnswers,
                x.WrongAnswers,
                x.UserId,
                db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).TotalMarks
            }).ToList();
            return Ok(report);
        }


        [HttpGet]
        [Route("api/Report/Mock/{UserId}")]
        public IHttpActionResult GetMockReport(string UserId)
        {
            var report = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock").Select(x => new
            {
                x.Accuracy,
                x.CorrectAnswers,
                x.Efficiency,
                x.QuizId,
                x.ReportId,
                x.TimeTaken,
                x.MarksScored,
                x.UnattemptedAnswers,
                x.WrongAnswers,
                x.UserId,
                db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                TotalMarks = db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).TotalMarks
            }).ToList();
            return Ok(report);
        }


    }
}
