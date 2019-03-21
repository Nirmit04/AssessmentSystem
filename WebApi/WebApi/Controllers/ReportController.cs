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
        [Route("api/Report/{UserId}")]
        public IHttpActionResult GetReport(string UserId)
        {
            var report = db.Reports.Where(x => x.UserId == UserId).Select(x => new
            {
                x.Accuracy,
                x.CorrectAnswers,
                x.Efficiency,
                x.QuizId,
                x.ReportId,
                x.TimeTaken,
                x.TotalMarks,
                x.UnattemptedAnswers,
                x.WrongAnswers,
                x.UserId,
                db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName
            }).ToList();
            return Ok();
        }
    }
}
