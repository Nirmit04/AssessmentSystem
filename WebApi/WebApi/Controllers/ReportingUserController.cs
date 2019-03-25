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
                    userAnalytics.Performance = Math.Round(TotalPerformance / userAnalytics.TotalQuizCount, 2);
                    userAnalytics.Accuracy = Math.Round(TotalAccuracy / userAnalytics.TotalQuizCount, 2);
                    userAnalytics.AverageScore = Math.Round((userAnalytics.HighestScore + userAnalytics.LowestScore) / userAnalytics.TotalQuizCount, 2);
                    userAnalytics.ProbabilityAnsweringCorrectly = Math.Round((decimal)(TotalCorrectAnswers * 100) / TotalQuestions, 2);
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
            var SubjectIds = db.Subjects.Select(x => x.SubjectId).ToList();
            if (SubjectIds != null)
            {
                foreach (var subjectId in SubjectIds)
                {
                    SubjectAnalytics subjectAnalysis = new SubjectAnalytics();
                    subjectAnalysis.SubjectId = subjectId;
                    subjectAnalysis.SubjectName = db.Subjects.FirstOrDefault(x => x.SubjectId == subjectId).Name;
                    var QuizIds = db.Quizs.Where(x => x.SubjectId == subjectId).Select(x => x.QuizId).ToList();
                    var quizReports = db.Reports.Where(x => QuizIds.Contains(x.QuizId)).ToList();
                    if (quizReports != null)
                    {
                        subjectAnalysis.Properties.HighestScore = quizReports.Select(max => max.MarksScored).DefaultIfEmpty().Max();
                        subjectAnalysis.Properties.LowestScore = quizReports.Select(max => max.MarksScored).DefaultIfEmpty().Min();
                        decimal TotalAccuracy = 0;
                        decimal TotalMarks = 0;
                        foreach (var item in quizReports)
                        {
                            TotalAccuracy = TotalAccuracy + item.Accuracy;
                            TotalMarks = TotalMarks + item.MarksScored;
                        }
                        if (quizReports.Count() != 0)
                        {
                            subjectAnalysis.Properties.Accuracy = Math.Round(TotalAccuracy / quizReports.Count(),2);
                            subjectAnalysis.Properties.NoOfQuiz = QuizIds.Count();
                            subjectAnalysis.Properties.AverageMarks = Math.Round(TotalMarks / quizReports.Count(),2);
                        }
                        else
                        {
                            subjectAnalysis.Properties.Accuracy = 0;
                            subjectAnalysis.Properties.AverageMarks = 0;
                        }
                    }
                    subjectAnalyticsList.Add(subjectAnalysis);
                }
            }
            return Ok(subjectAnalyticsList.OrderByDescending(x => x.Properties.Accuracy));
        }

    }
}