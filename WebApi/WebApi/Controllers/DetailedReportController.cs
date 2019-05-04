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
    public class DetailedReportController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        /// <summary>
        /// Returns the detailed report of the particular user in a particular quiz taken
        /// </summary>
        /// <param name="UserId">Mandatory</param>
        /// <param name="QuizId">Mandatory</param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/DetailedReport/{UserId}/{QuizId}")]
        public IHttpActionResult GetMockReport(string UserId, int QuizId)
        {
            var detailedReport = db.DetailedReports
                .Where(x => x.QuizId == QuizId && x.UserId == UserId)
                .Select(y => new
                {
                    y.DetailedReportId,
                    y.QuizId,
                    db.Quizs.FirstOrDefault(z => z.QuizId == y.QuizId).QuizName,
                    y.UserId,
                    y.QuestionId,
                    y.AttemptedAnswer,
                    y.CorrectAnswer,
                    db.Questions.FirstOrDefault(z => z.QuestionId == y.QuestionId).QuestionStatement,
                    Option = new List<string>()
                    {
                        db.Questions.FirstOrDefault(z=>z.QuestionId == y.QuestionId).Option1,
                        db.Questions.FirstOrDefault(z=>z.QuestionId == y.QuestionId).Option2,
                        db.Questions.FirstOrDefault(z=>z.QuestionId == y.QuestionId).Option3,
                        db.Questions.FirstOrDefault(z=>z.QuestionId == y.QuestionId).Option4
                    }
                });
            return Ok(detailedReport);
        }
    }
}