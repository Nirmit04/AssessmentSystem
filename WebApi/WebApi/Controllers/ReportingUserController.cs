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
            var userReport = db.Reports.AsEnumerable().Where(x => x.UserId == UserId);
            var MockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock").Count();
            var NonMockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Non-Mock").Count();
            var TotalQuizCount = MockCount + NonMockCount;
            int TotalReports = userReport.Count();
            decimal HighestScore = userReport.Max(max => max.MarksScored);
            decimal LowestScore = userReport.Min(min => min.MarksScored);
            decimal TotalPerformance = 0, TotalAccuracy = 0;
            int TotalCorrectAnswers = 0;
            int TotalQuestions = 0;
            foreach (var item in userReport)
            {
                int TotalQuizQuestions = (item.CorrectAnswers + item.WrongAnswers + item.UnattemptedAnswers);
                TotalPerformance = TotalPerformance + ((item.CorrectAnswers - (item.WrongAnswers + item.UnattemptedAnswers))/TotalQuizQuestions);
                TotalAccuracy = TotalAccuracy + item.Accuracy;
                TotalQuestions = TotalQuestions + TotalQuizQuestions;
                TotalCorrectAnswers = TotalCorrectAnswers + item.CorrectAnswers;
            }
            decimal Performance = TotalPerformance / TotalQuizCount;
            decimal Accuracy = TotalAccuracy / TotalQuizCount;
            decimal AverageScore = (HighestScore + LowestScore) / TotalQuizCount;
            decimal ProbabilityAnsweringCorrectly = (decimal)(TotalCorrectAnswers * 100) / TotalQuestions;
            Dictionary<string, string> UserAnalysis = new Dictionary<string, string>();
            UserAnalysis.Add("MockCount", MockCount.ToString());
            UserAnalysis.Add("Non-MockCount", NonMockCount.ToString());
            UserAnalysis.Add("TotalQuizCount", TotalQuizCount.ToString());
            UserAnalysis.Add("HighestScore", HighestScore.ToString());
            UserAnalysis.Add("LowestScore", LowestScore.ToString());
            UserAnalysis.Add("Performance", Performance.ToString());
            UserAnalysis.Add("Accuracy", Accuracy.ToString());
            UserAnalysis.Add("AverageScore", AverageScore.ToString());
            UserAnalysis.Add("ProbabilityAnsweringCorrectly", ProbabilityAnsweringCorrectly.ToString());
            return Ok(UserAnalysis);
        }

        //[HttpGet]
        //[Route("api/ReportingUser/AnalyticsByQuiz")]
        //public IHttpActionResult AnalyticsByQuiz()
        //{
        //    List<SubjectAnalytics> subjectAnalyticsList = new List<SubjectAnalytics>();
           
            
        //    //var report = new List<Report>();
        //    decimal tot = 0;
        //    var quizId = db.Reports.Select(x =>x.QuizId).Distinct().ToList();
        //    var SubjectId = db.Quizs.Where(x => quizId.Contains(x.QuizId)).Select(x=>x.SubjectId);
        //    foreach (var item in quizId)
        //    {
        //        SubjectAnalytics subjectAnalysis = new SubjectAnalytics();
        //        var report = db.Reports.AsEnumerable().Where(x => x.QuizId == item.QuizId).ToList();
        //        subjectAnalysis.Properties.HighestScore = report.Max(x => x.MarksScored);
        //        subjectAnalysis.Properties.LowestScore = report.Min(x => x.MarksScored);
        //        subjectAnalysis.Properties.Accuracy = report.Max(x => x.Accuracy);
        //        subjectAnalysis.Properties.NoOfQuiz = report.Count();
        //        subjectAnalysis.SubjectId = db.Quizs.FirstOrDefault(x => x.QuizId == item.QuizId).SubjectId;
        //        subjectAnalysis.SubjectName = db.Subjects.FirstOrDefault(x => x.SubjectId == subjectAnalysis.SubjectId).Name;
        //        foreach (var rep in report)
        //        {
        //            tot += rep.MarksScored;
        //        }
        //        subjectAnalysis.Properties.Average = tot / report.Count();
        //        subjectAnalyticsList.Add(subjectAnalysis);
        //    }
        //    return Ok(subjectAnalyticsList);
        //}

        [HttpGet]
        [Route("api/ReportingUser/AnalyticsByTag")]
        public IHttpActionResult AnalyticsByTag()
        {
            List<SubjectAnalytics> subjectAnalyticsList = new List<SubjectAnalytics>();
            SubjectAnalytics subjectAnalysis = new SubjectAnalytics();

            var SubjectId = db.Subjects.Select(x => x.SubjectId).ToList();
            decimal tot = 0;

            foreach (var subject in SubjectId)
            {
                var quizId = db.Reports.Select(x => x.QuizId).Distinct().ToList();
                var QuizId = db.Quizs.Where(x => x.SubjectId == subject).ToList();

                subjectAnalysis.SubjectId = subject;
                subjectAnalysis.SubjectName = db.Subjects.FirstOrDefault(x => x.SubjectId == subject).Name;

                foreach (var quiz in QuizId)
                {
                    var report = db.Reports.AsEnumerable().Where(x => x.QuizId == quiz.QuizId).ToList();
                    subjectAnalysis.Properties.HighestScore = report.Max(x => x.MarksScored);
                    subjectAnalysis.Properties.LowestScore = report.Min(x => x.MarksScored);
                    subjectAnalysis.Properties.Accuracy = report.Max(x => x.Accuracy);
                    subjectAnalysis.Properties.NoOfQuiz = report.Count();
                    
                    foreach (var rep in report)
                    {
                        tot += rep.MarksScored;
                    }
                    subjectAnalysis.Properties.Average = tot / report.Count();
                }
                subjectAnalyticsList.Add(subjectAnalysis);
            }
            return Ok(subjectAnalyticsList);
        }
    }
}