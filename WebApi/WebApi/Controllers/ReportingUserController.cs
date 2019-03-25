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


        [HttpGet]
        [Route("api/ReportingUser/AnalysisByQuiz/{QuizId}")]
        public IHttpActionResult AnalysisByQuiz(int QuizId)
        {
            var quizreports = db.Reports.Where(x => x.QuizId == QuizId).ToList();
            decimal TotalAccuracy = 0,TotalMarks=0;
            Property property = new Property();
            if (quizreports.Count()!= null)
            { 
                property.HighestScore = quizreports.Select(x => x.MarksScored).DefaultIfEmpty().Max();
                property.LowestScore = quizreports.Select(x => x.MarksScored).DefaultIfEmpty().Min();
                property.NoOfQuiz = quizreports.Count();

                foreach (var item in quizreports)
                {
                    TotalAccuracy += item.Accuracy;
                    TotalMarks += item.MarksScored;
                }
                try
                {
                    property.Average = TotalMarks / property.NoOfQuiz;
                    property.Accuracy = TotalAccuracy / property.NoOfQuiz;
                }
                catch(Exception e)
                {

                }
                return Ok(property);
            }
            else
            {
                return BadRequest("Quiz Does Not Exist");
            }

            
        }
    }
}