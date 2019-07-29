using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/ReportingUser")]
    [Authorize]
    public class ReportingUserController : ApiController
    {
        private HelperClass helper = new HelperClass();
        private IReport rReport = new RReport();
        private ISubject rSubject = new RSubject();
        private IQuestion rQuestion = new RQuestion();
        private IQuiz rQuiz = new RQuiz();
        private IUser rUser = new RUser();
        private IQuizTag rQuizTag = new RQuizTag();

        /// <summary>
        /// Returns the complete analysis of a particular user such as Accuracy, Highest ,Lowest Marks,Performace, Average Score
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("AnalyticsByUser/{UserId}")]
        public async Task<IHttpActionResult> AnalyticsByUser([FromUri]string UserId)
        {
            if (helper.ValidateUserId(UserId))
            {
                UserAnalytics userAnalytics = new UserAnalytics();
                var userReport = await rReport.GetQuizReportByUser(UserId);
                if (userReport.Count() != 0)
                {
                    userAnalytics.MockCount = await rReport.GetQuizReportByQuizTypeCount(UserId, "Mock");
                    userAnalytics.ScheduledCount = await rReport.GetQuizReportByQuizTypeCount(UserId, "Scheduled");
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
        [Route("AnalyticsByQuiz/{QuizId}")]
        public async Task<IHttpActionResult> AnalyticsByQuiz([FromUri]int QuizId)
        {
            if (helper.ValidateQuizId(QuizId))
            {
                var quizReports = await rReport.GetQuizReportByQuiz(QuizId);
                decimal TotalAccuracy = 0, TotalMarks = 0;
                QuizProperty quizProperty = new QuizProperty();
                if (quizReports.Count() != 0)
                {
                    quizProperty.HighestScore = quizReports.Select(x => x.MarksScored).DefaultIfEmpty().Max();
                    quizProperty.LowestScore = quizReports.Select(x => x.MarksScored).DefaultIfEmpty().Min();
                    quizProperty.NoOfQuiz = quizReports.Count();
                    TotalAccuracy = quizReports.Sum(x => x.Accuracy);
                    TotalMarks = quizReports.Sum(x => x.MarksScored);
                    try
                    {
                        quizProperty.AverageMarks = Math.Round(TotalMarks / quizProperty.NoOfQuiz, 2);
                        quizProperty.Accuracy = Math.Round(TotalAccuracy / quizProperty.NoOfQuiz, 2);
                    }
                    catch (Exception)
                    {
                        throw;
                    }
                    return Ok(quizProperty);
                }
                return Ok(quizProperty);
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
        [Route("AnalyticsByTag")]
        public async Task<IHttpActionResult> AnalyticsByTag()
        {        
            List<SubjectAnalytics> subjectAnalyticsList = new List<SubjectAnalytics>();
            var subjectList = await rSubject.GetAllSubjects();
            if (subjectList != null)
            {
                foreach (var subject in subjectList)
                {
                    SubjectAnalytics subjectAnalysis = new SubjectAnalytics();
                    subjectAnalysis.SubjectId = subject.SubjectId;
                    subjectAnalysis.SubjectName = subject.Name;
                    var quizIds = await rQuizTag.GetQuizTagsBySubject(subject.SubjectId);
                    var quizReports = await rReport.GetQuizReportByQuizIds(quizIds);
                    if (quizReports.Count() != 0)
                    {
                        subjectAnalysis.QuizProperties.HighestScore = quizReports.Select(max => max.MarksScored).DefaultIfEmpty().Max();
                        subjectAnalysis.QuizProperties.LowestScore = quizReports.Select(max => max.MarksScored).DefaultIfEmpty().Min();
                        decimal TotalAccuracy = quizReports.Sum(x => x.Accuracy);
                        decimal TotalMarks = quizReports.Sum(x => x.MarksScored); ;
                        try
                        {
                            subjectAnalysis.QuizProperties.Accuracy = Math.Round(TotalAccuracy / quizReports.Count(),2);
                            subjectAnalysis.QuizProperties.NoOfQuiz = quizIds.Count();
                            subjectAnalysis.QuizProperties.AverageMarks = Math.Round(TotalMarks / quizReports.Count(),2);
                        }
                        catch(Exception)
                        {
                            throw;
                        }
                    }
                    subjectAnalyticsList.Add(subjectAnalysis);
                }
            }
            return Ok(subjectAnalyticsList.OrderByDescending(x => x.QuizProperties.Accuracy));
        }

        /// <summary>
        /// Returns the stats of the entire system such as QuizCount, QuestionCount, UserCount, SubjectCount
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("Stats")]
        public async Task<IHttpActionResult> Stats()
        {
            Dictionary<string, string> allStats = new Dictionary<string, string>();
            var quizzes = await rQuiz.GetAllQuizzes();
            var users = await rUser.GetAllUsers();
            var questionsCount = await rQuestion.GetAllQuestionsCount();
            var subjects = await rSubject.GetAllSubjects();
            allStats.Add("QuizCount",quizzes.Count().ToString());
            allStats.Add("QuestionCount", questionsCount.ToString());
            allStats.Add("UserCount", users.Count().ToString());
            allStats.Add("SubjectCount", subjects.Count().ToString());
            return Ok(allStats);
        }

    }
}