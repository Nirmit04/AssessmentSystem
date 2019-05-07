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
    public class ReportingUserController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        /// <summary>
        /// Returns the complete analysis of a particular user such as Accuracy, Highest ,Lowest Marks,Performace, Average Score
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
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
                    userAnalytics.ScheduledCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Scheduled").Count();
                    userAnalytics.TotalQuizCount = userReport.Count();
                    userAnalytics.HighestScore = userReport.Select(max => max.MarksScored).DefaultIfEmpty().Max();
                    userAnalytics.LowestScore = userReport.Select(max => max.MarksScored).DefaultIfEmpty().Min();
                    decimal TotalPerformance = 0, TotalAccuracy = 0, TotalQuestions = 0, TotalMarksScored = 0;
                    int TotalCorrectAnswers = 0;
                    foreach (var item in userReport)
                    {
                        decimal TotalQuizQuestions = (item.CorrectAnswers + item.WrongAnswers + item.UnattemptedAnswers);
                        TotalPerformance += ((item.CorrectAnswers - (item.WrongAnswers + item.UnattemptedAnswers)) / TotalQuizQuestions);
                        TotalAccuracy += item.Accuracy;
                        TotalQuestions += TotalQuizQuestions;
                        TotalMarksScored += item.MarksScored;
                        TotalCorrectAnswers += item.CorrectAnswers;
                    }
                    try
                    {
                        userAnalytics.Performance = Math.Round(TotalPerformance / userAnalytics.TotalQuizCount, 2);
                        userAnalytics.Accuracy = Math.Round(TotalAccuracy / userAnalytics.TotalQuizCount, 2);
                        userAnalytics.AverageScore = Math.Round(TotalMarksScored / userAnalytics.TotalQuizCount, 2);
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

        /// <summary>
        /// Returns the complete analysis of a particular Quiz such as Accuracy, Highest ,Lowest Marks,Average Score
        /// </summary>
        /// <param name="QuizId"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Returns the complete analysis of a particular Tag such as Accuracy, Highest ,Lowest Marks ,Average Score
        /// </summary>
        /// <returns></returns>
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
                    //var QuizIds = db.Quizs.Where(x => x.SubjectId == subjectId).Select(x => x.QuizId).ToList();
                    List<int> QuizIds = new List<int>(); //temp
                    var quizReports = db.Reports.Where(x => QuizIds.Contains(x.QuizId)).ToList();
                    if (quizReports.Count() != 0)
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
                        try
                        {
                            subjectAnalysis.Properties.Accuracy = Math.Round(TotalAccuracy / quizReports.Count(),2);
                            subjectAnalysis.Properties.NoOfQuiz = QuizIds.Count();
                            subjectAnalysis.Properties.AverageMarks = Math.Round(TotalMarks / quizReports.Count(),2);
                        }
                        catch(Exception)
                        {
                            throw;
                        }
                    }
                    subjectAnalyticsList.Add(subjectAnalysis);
                }
            }
            return Ok(subjectAnalyticsList.OrderByDescending(x => x.Properties.Accuracy));
        }
        /// <summary>
        /// Returns the stats of the entire system such as QuizCount, QuestionCount, UserCount, SubjectCount
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/ReportingUser/Stats")]
        public IHttpActionResult AllStats()
        {
            Dictionary<string, string> allStats = new Dictionary<string, string>();
            var quizCount = db.Quizs.Count();
            var userCount = db.Users.Count();
            var questionCount = db.Questions.Count();
            var subjectCount = db.Subjects.Count();
            allStats.Add("QuizCount",quizCount.ToString());
            allStats.Add("QuestionCount", questionCount.ToString());
            allStats.Add("UserCount", userCount.ToString());
            allStats.Add("SubjectCount", subjectCount.ToString());

            return Ok(allStats);
        }

    }
}