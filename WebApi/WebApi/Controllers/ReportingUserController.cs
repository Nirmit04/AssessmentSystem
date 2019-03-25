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
            if (db.Users.Find(UserId) != null)
            {
                UserAnalytics userAnalytics = new UserAnalytics();
                var userReport = db.Reports.Where(x => x.UserId == UserId).ToList();
                if (userReport.Count() != 0)
                {
                    userAnalytics.MockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock").Count();
                    userAnalytics.NonMockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Non-Mock").Count();
                    userAnalytics.TotalQuizCount = userReport.Count();
                    userAnalytics.HighestScore = userReport.Select(max => max.MarksScored).DefaultIfEmpty().Max();
                    userAnalytics.LowestScore = userReport.Select(max => max.MarksScored).DefaultIfEmpty().Min();
                    decimal TotalPerformance = 0, TotalAccuracy = 0;
                    int TotalCorrectAnswers = 0, TotalQuestions = 0;
                    foreach (var item in userReport)
                    {
                        int TotalQuizQuestions = (item.CorrectAnswers + item.WrongAnswers + item.UnattemptedAnswers);
                        TotalPerformance += ((item.CorrectAnswers - (item.WrongAnswers + item.UnattemptedAnswers)) / TotalQuizQuestions);
                        TotalAccuracy += item.Accuracy;
                        TotalQuestions += TotalQuizQuestions;
                        TotalCorrectAnswers += item.CorrectAnswers;
                    }
                    try
                    {
                        userAnalytics.Performance = Math.Round(TotalPerformance / userAnalytics.TotalQuizCount, 2);
                        userAnalytics.Accuracy = Math.Round(TotalAccuracy / userAnalytics.TotalQuizCount, 2);
                        userAnalytics.AverageScore = Math.Round((userAnalytics.HighestScore + userAnalytics.LowestScore) / userAnalytics.TotalQuizCount, 2);
                        userAnalytics.ProbabilityAnsweringCorrectly = Math.Round((decimal)(TotalCorrectAnswers * 100) / TotalQuestions, 2);
                    }
                    catch (Exception)
                    {
                        throw;
                    }
                    return Ok(userAnalytics);
                }
                else
                {
                    return Ok(userAnalytics);
                }
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpGet]
        [Route("api/ReportingUser/AnalyticsByQuiz/{QuizId}")]
        public IHttpActionResult AnalyticsByQuiz(int QuizId)
        {
            if (db.Quizs.Find(QuizId) != null)
            {
                var quizreports = db.Reports.Where(x => x.QuizId == QuizId).ToList();
                decimal TotalAccuracy = 0, TotalMarks = 0;
                Property property = new Property();
                if (quizreports.Count() != 0)
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
                        property.AverageMarks = Math.Round(TotalMarks / property.NoOfQuiz, 2);
                        property.Accuracy = Math.Round(TotalAccuracy / property.NoOfQuiz, 2);
                    }
                    catch (Exception)
                    {
                        throw;
                    }
                    return Ok(property);
                }
                return Ok(property);
            }
            else
            {
                return BadRequest("Quiz Does Not Exist");
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