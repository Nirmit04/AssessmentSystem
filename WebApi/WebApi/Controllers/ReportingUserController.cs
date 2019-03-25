using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ReportingUserController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        [Route("api/ReportingUser/AnalyticsByTag")]
        public IHttpActionResult AnalyticsByTag()
        {
            List<SubjectAnalytics> subjectAnalyticsList = new List<SubjectAnalytics>();
           
            SubjectAnalytics subjectAnalysis = new SubjectAnalytics();
            var report = new List<Report>();
            decimal tot = 0;
            var quizId = db.Reports.Distinct().Select(x => new { x.QuizId }).ToList();

            foreach (var item in quizId)
            {
                report = db.Reports.Where(x => x.QuizId == item.QuizId).ToList();

                subjectAnalysis.Properties.HighestScore = report.Max(x=>x.MarksScored);
                subjectAnalysis.Properties.LowestScore = report.Min(x => x.MarksScored);
                subjectAnalysis.Properties.Accuracy = report.Max(x => x.Accuracy);
                subjectAnalysis.Properties.NoQuiz = report.Count();
                
                subjectAnalysis.SubjectId= db.Quizs.FirstOrDefault(x=>x.QuizId==item.QuizId).SubjectId;
                subjectAnalysis.SubjectName = db.Subjects.FirstOrDefault(x => x.SubjectId == subjectAnalysis.SubjectId).Name;

                foreach (var rep in report)
                {
                    tot += rep.MarksScored;
                }
                subjectAnalysis.Properties.Average =tot/ report.Count();

                subjectAnalyticsList.Add(subjectAnalysis);

            }
            return Ok(subjectAnalyticsList);

        }
    }
}