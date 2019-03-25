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
        [Route("api/ReportingUser/AnalyticsByUser/{UserId}")]
        public IHttpActionResult AnalyticsByUser(string UserId)
        {
            UserAnalytics userAnalytics = new UserAnalytics();
            var userReport = db.Reports.AsEnumerable().Where(x => x.UserId == UserId);
            if (userReport != null)
            {
                userAnalytics.MockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock").Count();
                userAnalytics.NonMockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Non-Mock").Count();
                userAnalytics.TotalQuizCount = userAnalytics.MockCount + userAnalytics.NonMockCount;
                int TotalReports = userReport.Count();

                userAnalytics.HighestScore = userReport.Select(max => max.MarksScored).DefaultIfEmpty().Max();
                userAnalytics.LowestScore = userReport.Select(max => max.MarksScored).DefaultIfEmpty().Min();
                decimal TotalPerformance = 0, TotalAccuracy = 0;
                int TotalCorrectAnswers = 0;
                int TotalQuestions = 0;
                foreach (var item in userReport)
                {
                    int TotalQuizQuestions = (item.CorrectAnswers + item.WrongAnswers + item.UnattemptedAnswers);
                    TotalPerformance = TotalPerformance + ((item.CorrectAnswers - (item.WrongAnswers + item.UnattemptedAnswers)) / TotalQuizQuestions);
                    TotalAccuracy = TotalAccuracy + item.Accuracy;
                    TotalQuestions = TotalQuestions + TotalQuizQuestions;
                    TotalCorrectAnswers = TotalCorrectAnswers + item.CorrectAnswers;
                }
                if (userAnalytics.TotalQuizCount != 0)
                {
                    userAnalytics.Performance = TotalPerformance / userAnalytics.TotalQuizCount;
                    userAnalytics.Accuracy = TotalAccuracy / userAnalytics.TotalQuizCount;
                    userAnalytics.AverageScore = (userAnalytics.HighestScore + userAnalytics.LowestScore) / userAnalytics.TotalQuizCount;
                    userAnalytics.ProbabilityAnsweringCorrectly = (decimal)(TotalCorrectAnswers * 100) / TotalQuestions;
                }
                else
                {
                    userAnalytics.Performance = 0;
                    userAnalytics.Accuracy = 0;
                    userAnalytics.AverageScore = 0;
                    userAnalytics.ProbabilityAnsweringCorrectly = 0;
                }
                return Ok(userAnalytics);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("api/ReportingUser/AnalyticsByTag")]
        public IHttpActionResult AnalyticsByTag()
        {
            List<SubjectAnalytics> subjectAnalyticsList = new List<SubjectAnalytics>();

            SubjectAnalytics subjectAnalysis;
            var report = new List<Report>();
            decimal tot = 0;
            var quizId = db.Reports.Select(x => new { x.QuizId }).Distinct().ToList();
           
            foreach (var item in quizId)
            {

                    subjectAnalysis = new SubjectAnalytics();
                    
                report = db.Reports.AsEnumerable().Where(x => x.QuizId == item.QuizId).ToList();
                foreach (var it in report)
                {
                    System.Diagnostics.Debug.WriteLine(it.QuizId);

                }
                subjectAnalysis.SubjectId = db.Quizs.First(x => x.QuizId == item.QuizId).SubjectId;
                System.Diagnostics.Debug.WriteLine(subjectAnalysis.SubjectId);
                subjectAnalysis.SubjectName = db.Subjects.First(x => x.SubjectId == subjectAnalysis.SubjectId).Name;
                System.Diagnostics.Debug.WriteLine(subjectAnalysis.SubjectName);


                subjectAnalysis.Properties.HighestScore = report.Max(x => x.MarksScored);
                    subjectAnalysis.Properties.LowestScore = report.Min(x => x.MarksScored);
                    subjectAnalysis.Properties.Accuracy = report.Max(x => x.Accuracy);
                    subjectAnalysis.Properties.NoOfQuiz = report.Count();
                
                    foreach (var rep in report)
                    {
                        tot += rep.MarksScored;
                    }
                    subjectAnalysis.Properties.Average = tot / report.Count();
                subjectAnalyticsList.Add(subjectAnalysis);

            }
            return Ok(subjectAnalyticsList);
        }
    }
}