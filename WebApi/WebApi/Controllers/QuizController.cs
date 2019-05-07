using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class QuizController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();

        /// <summary>
        /// Created a quiz and associates the list of questions to that quiz
        /// </summary>
        /// <param name="quiz">Quiz Model</param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Quiz/CreateQuiz")]
        public IHttpActionResult CreateQuiz(Quiz quiz)
        {
            Question ques = new Question();
            quiz.TotalMarks = 0;
            quiz.TotalQuestions = quiz.QuestionIds.Length;
            foreach (var item in quiz.QuestionIds)
            {
                ques = db.Questions.Find(item);
                quiz.TotalMarks += ques.Marks;
            }
            quiz.ArchiveStatus = false;
            db.Quizs.Add(quiz);

            QuizQuestion quizQuestion;
            foreach (var item in quiz.QuestionIds)
            {
                quizQuestion = new QuizQuestion()
                {
                    QuizId = quiz.QuizId,
                    QuestionId = item
                };
                db.QuizQuestions.Add(quizQuestion);
                db.SaveChanges();
            }
            QuizTag quizTag;
            foreach (var item in quiz.Tags)
            {
                quizTag = new QuizTag()
                {
                    QuizId = quiz.QuizId,
                    SubjectId = item.SubjectId
                };
                db.QuizTags.Add(quizTag);
                db.SaveChanges();
            }
            db.SaveChanges();
            return Ok();
        }

        /// <summary>
        /// Returns the quiz created by that particular user/content creator
        /// </summary>
        /// <param name="CreatedBy">User Id</param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/GetQuiz/{CreatedBy}")]
        public IHttpActionResult GetQuiz(string CreatedBy)
        {
            if (db.Users.Find(CreatedBy) == null)
            {
                return BadRequest("Invalid UserId");
            }
            var quiz = db.Quizs.AsEnumerable().Where(x => x.CreatedBy == CreatedBy && x.ArchiveStatus == false)
                 .Select(x => new
                 {
                     x.QuizId,
                     x.QuizName,
                     x.Difficulty,
                     x.TotalQuestions,
                     x.TotalMarks,
                     x.ArchiveStatus,
                     x.QuizType,
                     x.QuizTime,
                     Tags=helper.GetQuizSubjectTags(x.QuizId)
                })
                .OrderByDescending(z => z.QuizId)
                .ToList();
            return Ok(quiz);
        }

        /// <summary>
        /// Used to delete a quiz based on QuizId
        /// </summary>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("api/Quiz/Delete/{QuizId}")]
        public IHttpActionResult Archive(int QuizId)
        {
            Quiz quiz = db.Quizs.Find(QuizId);
            quiz.ArchiveStatus = true;
            db.SaveChanges();
            return Ok();
        }

        /// <summary>
        /// Used to Unacrhive an Archived Quiz
        /// </summary>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/Quiz/Unarchive")]
        public IHttpActionResult UnArchive([FromBody]int QuizId)
        {
            Quiz quiz = db.Quizs.Find(QuizId);
            if (quiz == null)
            {
                return BadRequest("QuizId Not Found");
            }
            quiz.ArchiveStatus = false;
            db.SaveChanges();
            return Ok();
        }

        
        [HttpGet]
        [Route("api/Quiz/QuizQuestion")]
        public IHttpActionResult GetQuizQuestionTakeQuiz([FromUri]int QuizId, [FromUri]string UserId = null)
        {
            if (db.Quizs.Find(QuizId) == null)
            {
                return BadRequest("QuizId Not Found");
            }
            var qIds = db.QuizQuestions
                .Where(x => x.QuizId == QuizId)
                .Select(x => x.QuestionId)
                .ToList();
            if (UserId != null)
            {
                if (helper.ValidateUserId(UserId) == false)
                {
                    return BadRequest("UserId Not Found");
                }
                var tempQuizBuffer = db.QuizBuffers.Where(x => x.QuizId == QuizId && x.UserId == UserId).ToList();
                if (tempQuizBuffer.Count() == db.Quizs.Find(QuizId).TotalQuestions)
                {
                    DateTime time = DateTime.Parse("00:00:00");
                    List<GetQuestionBuffer> getQuestionBuffer = new List<GetQuestionBuffer>();
                    foreach (var item in tempQuizBuffer)
                    {
                        getQuestionBuffer.Add(new GetQuestionBuffer()
                        {
                            Index = item.Index,
                            State = item.State,
                            ResponseTime = item.ResponseTime
                        });
                        time = time + TimeSpan.Parse(item.ResponseTime);
                    }
                    var TimeLeft = DateTime.Parse(db.Quizs.Find(QuizId).QuizTime) - time;
                    ResumeQuizBuffer resumeQuizBuffer = new ResumeQuizBuffer();
                    resumeQuizBuffer.GetQuestionBuffers = getQuestionBuffer;
                    resumeQuizBuffer.TimeLeft = TimeLeft.ToString();
                    return Ok(resumeQuizBuffer);
                }
                else
                {
                    int index = 1;
                    QuizBuffer quizBuffer = new QuizBuffer();
                    quizBuffer.QuizId = QuizId;
                    quizBuffer.UserId = UserId;
                    foreach (int qId in qIds)
                    {
                        quizBuffer.Index = index;
                        quizBuffer.QuestionId = qId;
                        index++;
                        db.QuizBuffers.Add(quizBuffer);
                        db.SaveChanges();
                    }
                    return Ok("Quiz Started");
                }
            }
            else
            {
                var questions = db.Questions
                     .AsEnumerable()
                     .Where(y => qIds.Contains(y.QuestionId))
                    .Select(x => new
                    {
                        x.QuestionId,
                        x.QuestionStatement,
                        Option = new string[] { x.Option1, x.Option2, x.Option3, x.Option4 },
                        x.ImageName,
                        x.Marks,
                        x.QuestionType,
                        x.Difficulty,
                        Tags = helper.GetQuestionSubjectTags(x.QuestionId),
                        x.CreatedBy
                    }).ToList();
                return Ok(questions);
            }
        }

        /// <summary>
        /// Used to delete a question from the quiz
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("api/Quiz/QuizQuestion/Delete/{QuizId}/{QuestionId}")]
        public IHttpActionResult DeleteQuestion(int QuestionId, int QuizId)
        {
            if(db.Questions.Find(QuestionId)==null || db.Quizs.Find(QuizId)==null)
            {
                return BadRequest("Invalid Parameters");
            }
            var quizquestion = db.QuizQuestions.FirstOrDefault(x => x.QuestionId == QuestionId && x.QuizId == QuizId);
            db.QuizQuestions.Remove(quizquestion);
            var question = db.Questions.FirstOrDefault(x => x.QuestionId == QuestionId);
            var quiz = db.Quizs.FirstOrDefault(x => x.QuizId == QuizId);
            quiz.TotalMarks = quiz.TotalMarks - question.Marks;
            quiz.TotalQuestions--;
            db.SaveChanges();
            return Ok();
        }

        /// <summary>
        /// Returns all the questions which are not present in the quiz specified
        /// </summary>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/GetQuestionsNotInQuiz/{QuizId}")]
        public IHttpActionResult GetQuestionsNotInQuiz(int QuizId)
        {
            if(db.Quizs.Find(QuizId)==null)
            {
                return BadRequest("Invalid Quizid");
            }
            var quiz = db.Quizs.Single(x => x.QuizId == QuizId);
            var qIdsInQuiz = db.QuizQuestions.AsEnumerable()
                .Where(x => x.QuizId == QuizId)
                .Select(z => z.QuestionId).ToList();
            var Tags = db.QuizTags.Where(x => x.QuizId == quiz.QuizId).Select(z => z.SubjectId);

            List<SubjectTag> subjectTag = new List<SubjectTag>();
            SubjectTag subject = new SubjectTag();
            foreach (var item in Tags)
            {
                subject.SubjectId = item;
                subject.Name = "";
                subjectTag.Add(subject);
            }
            var questionIds = helper.GetQuestionIdsBySubject(subjectTag.ToArray());
            var questions = db.Questions.AsEnumerable().Where(x =>questionIds.Contains(x.QuestionId) && x.Difficulty == quiz.Difficulty && x.QuestionType == quiz.QuizType && !qIdsInQuiz.Contains(x.QuestionId))
               .Select(z => new
               {
                   z.QuestionId,
                   z.QuestionStatement,
                   z.Option1,
                   z.Option2,
                   z.Option3,
                   z.Option4,
                   z.Answer,
                   z.Marks,
                   z.QuestionType,
                   Tags = helper.GetQuestionSubjectTags(z.QuestionId),
                   z.Difficulty,
                   z.ImageName
               }).ToList();
            return Ok(questions);
        }

        /// <summary>
        /// Returns all the quizzes archived by that user
        /// </summary>
        /// <param name="CreatedBy">UserId</param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/Archived/{CreatedBy}")]
        public IHttpActionResult ArchviedQuiz(string CreatedBy)
        {
            if (!helper.ValidateUserId(CreatedBy))
            {
                return BadRequest("Invalid User");
            }
            var quiz = db.Quizs.AsEnumerable().Where(x => x.CreatedBy == CreatedBy).Where(x => x.ArchiveStatus == true)
                .Select(x => new
                {
                    x.QuizId,
                    x.QuizName,
                    x.Difficulty,
                    x.TotalQuestions,
                    x.TotalMarks,
                    x.ArchiveStatus,
                    x.QuizType,
                    x.QuizTime,
                    Tags = helper.GetQuizSubjectTags(x.QuizId)
                }).ToList();
            return Ok(quiz);
        }

        /// <summary>
        /// Returns all the quiz present
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/GetAllQuiz")]
        public IHttpActionResult GetAllQuiz()
        {
            var quiz = db.Quizs.Where(x => x.ArchiveStatus == false)
                .Select(x => new
                {
                    x.QuizId,
                    x.QuizName,
                    x.Difficulty,
                    x.TotalQuestions,
                    x.TotalMarks,
                    x.ArchiveStatus,
                    x.QuizType,
                    x.QuizTime,
                    Tags = helper.GetQuizSubjectTags(x.QuizId),
                    CreatedBy = db.Users.FirstOrDefault(z=>z.Id==x.CreatedBy).FirstName
                })
                .OrderByDescending(z => z.QuizId)
                .ToList();
            return Ok(quiz);
        }

        /// <summary>
        /// Adds a new question to an existing quiz
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/GetAllQuizName")]
        public IHttpActionResult GetAllQuizName()
        {
            var quiz = db.Quizs
                .Select(x => new
                {
                    x.QuizId,
                    x.QuizName,
                    x.QuizType
                })
                .ToList();
            return Ok(quiz);
        }

        /// <summary>
        /// Adds a new question to an existing quiz
        /// </summary>
        /// <param name="QuizId"></param>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/Quiz/EditQuiz/AddQuestion/{QuizId}")]
        public IHttpActionResult AddQuestions(int QuizId, [FromBody]int[] QuestionId)
        {
            QuizQuestion quizQuestion = new QuizQuestion();
            Quiz quiz = new Quiz();
            Question question = new Question();
            foreach (var item in QuestionId)
            {
                quizQuestion.QuizId = QuizId;
                quizQuestion.QuestionId = item;
                db.QuizQuestions.Add(quizQuestion);
                quiz = db.Quizs.FirstOrDefault(x => x.QuizId == QuizId);
                question = db.Questions.FirstOrDefault(x => x.QuestionId == item);
                quiz.TotalQuestions++;
                quiz.TotalMarks += question.Marks;
                db.SaveChanges();
            }
            return Ok();
        }

        /// <summary>
        /// Returns all the mock quiz present
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/MockQuiz")]
        public IHttpActionResult GetAllMockQuiz()
        {
            var Mock = db.Quizs.AsEnumerable().Where(x => x.QuizType == "Mock" && x.ArchiveStatus == false)
                .Select(x => new
                {
                    x.QuizId,
                    x.QuizName,
                    x.Difficulty,
                    x.TotalMarks,
                    x.ArchiveStatus,
                    x.QuizTime,
                    x.QuizType,
                    x.TotalQuestions,
                    Tags = helper.GetQuizSubjectTags(x.QuizId),
                    //CreatedBy = db.Users.FirstOrDefault(z => z.Id == x.CreatedBy).FirstName
                })
                .OrderByDescending(z => z.QuizId)
                .ToList();
            return Ok(Mock);
        }

        /// <summary>
        /// Returns all scheduled quiz present
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/GetAllScheduledQuiz")]
        public IHttpActionResult GetAllScheduledQuiz()
        {
            var quiz = db.Quizs.AsEnumerable().Where(x => x.QuizType == "Scheduled" && x.ArchiveStatus == false)
                .Select(x => new
                {
                    x.QuizId,
                    x.QuizName,
                    x.Difficulty,
                    x.TotalQuestions,
                    x.TotalMarks,
                    x.ArchiveStatus,
                    x.QuizType,
                    x.QuizTime,
                    Tags = helper.GetQuizSubjectTags(x.QuizId),
                    //CreatedBy = db.Users.FirstOrDefault(z => z.Id == x.CreatedBy).FirstName
                })
                .OrderByDescending(z => z.QuizId)
                .ToList();
            return Ok(quiz);
        }

        /// <summary>
        /// Submit the Quiz and Call Evaluation Method which creates a Report and also a Detailed Report
        /// which calculates marks correct, incorrect, unattempted and TotalResponse of a Scheduled Quiz
        /// </summary>
        /// <param name="submitQuiz"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Quiz/SubmitQuiz")]
        public IHttpActionResult SubmitQuiz(SubmitQuiz submitQuiz)
        {
            var quizBuffer = db.QuizBuffers.Where(x => x.UserId == submitQuiz.UserId && x.QuizId == submitQuiz.QuizId).ToList();
            List<int> qIDs = new List<int>();
            foreach (var item in quizBuffer)
            {
                qIDs.Add(item.QuestionId);
            }
            var CorrectAnswers = db.Questions
                .AsEnumerable()
                .Where(x => qIDs.Contains(x.QuestionId))
                .OrderBy(x => { return Array.IndexOf(qIDs.ToArray(), x.QuestionId); })
                .Select(z => new { z.Answer, z.Marks })
                .ToList();
            int i = 0, CAnswer = 0, WAnswer = 0, UAttempted = 0;
            decimal TMarks = 0;
            DetailedReport detailedReport = new DetailedReport();
            Report report = new Report();
            foreach (var item in quizBuffer)
            {
                if (item.MarkedAnswer == CorrectAnswers[i].Answer)
                {
                    TMarks += CorrectAnswers[i].Marks;
                    CAnswer++;
                }
                else if (item.MarkedAnswer == 0)
                {
                    UAttempted++;
                }
                else
                {
                    WAnswer++;
                }
                if (db.Quizs.FirstOrDefault(x => x.QuizId == submitQuiz.QuizId).QuizType == "Scheduled")
                {
                    detailedReport.AttemptedAnswer = item.MarkedAnswer;
                    detailedReport.CorrectAnswer = CorrectAnswers[i].Answer;
                    detailedReport.QuizId = submitQuiz.QuizId;
                    detailedReport.QuestionId = item.QuestionId;
                    detailedReport.UserId = submitQuiz.UserId;
                    detailedReport.ResponseTime = item.ResponseTime;
                    db.DetailedReports.Add(detailedReport);
                    db.SaveChanges();
                }
                i++;
            }
            report.CorrectAnswers = CAnswer;
            report.WrongAnswers = WAnswer;
            report.UnattemptedAnswers = UAttempted;
            report.TimeTaken = submitQuiz.TotalResponseTime;
            //Here CorrectAnswers.Count() is TotalQuestions
            report.Accuracy = (CAnswer * 100) / CorrectAnswers.Count();
            report.MarksScored = TMarks;
            report.QuizType = db.Quizs.FirstOrDefault(x => x.QuizId == submitQuiz.QuizId).QuizType;
            report.UserId = submitQuiz.UserId;
            report.QuizId = submitQuiz.QuizId;
            var userSchedule = db.UserSchedules.FirstOrDefault(x => x.QuizScheduleId == submitQuiz.QuizScheduleId && x.UserId == submitQuiz.UserId && x.QuizId == submitQuiz.QuizId);
            if (userSchedule != null)
            {
                userSchedule.Taken = true;
            }
            db.Reports.Add(report);
            if (db.Quizs.FirstOrDefault(x => x.QuizId == submitQuiz.QuizId).QuizType == "Scheduled")
            {
                db.QuizBuffers.RemoveRange(quizBuffer);
            }
            db.SaveChanges();
            return Ok();
        }

        ///// <summary>
        ///// Creates a report and also a detailed report which calculates marks correct, incorrect, unattempted of a Scheduled Quiz
        ///// </summary>
        ///// <param name="evalutionAnswer"></param>
        ///// <returns></returns>
        //[HttpPost]
        //[Route("api/Quiz/EvaluateQuiz")]
        //public IHttpActionResult EvaluateQuiz(EvalutionAnswer evalutionAnswer)
        //{
        //    List<int> qIDs = new List<int>();
        //    foreach (var item in evalutionAnswer.QuesAnswers)
        //    {
        //        qIDs.Add(item.QuestionID);
        //    }
        //    var CorrectAnswers = db.Questions
        //        .AsEnumerable()
        //        .Where(x => qIDs.Contains(x.QuestionId))
        //        .OrderBy(x => { return Array.IndexOf(qIDs.ToArray(), x.QuestionId); })
        //        .Select(z => new { z.Answer, z.Marks })
        //        .ToList();
        //    int i = 0, CAnswer = 0, WAnswer = 0, UAttempted = 0;
        //    decimal TMarks = 0;
        //    DetailedReport detailedReport = new DetailedReport();
        //    Report report = new Report();
        //    foreach (var item in evalutionAnswer.QuesAnswers)
        //    {
        //        detailedReport.AttemptedAnswer = item.MarkedAnswer;
        //        detailedReport.CorrectAnswer = CorrectAnswers[i].Answer;
        //        detailedReport.QuizId = evalutionAnswer.QuizId;
        //        detailedReport.QuestionId = item.QuestionID;
        //        detailedReport.UserId = evalutionAnswer.UserId;
        //        if (item.MarkedAnswer == CorrectAnswers[i].Answer)
        //        {
        //            TMarks += CorrectAnswers[i].Marks;
        //            CAnswer++;
        //        }
        //        else if (item.MarkedAnswer == 0)
        //        {
        //            UAttempted++;
        //        }
        //        else
        //        {
        //            WAnswer++;
        //        }
        //        i++;
        //        if (db.Quizs.FirstOrDefault(x => x.QuizId == evalutionAnswer.QuizId).QuizType == "Scheduled")
        //        {
        //            db.DetailedReports.Add(detailedReport);
        //            db.SaveChanges();
        //        }
        //    }
        //    report.CorrectAnswers = CAnswer;
        //    report.WrongAnswers = WAnswer;
        //    report.UnattemptedAnswers = UAttempted;
        //    report.TimeTaken = evalutionAnswer.TimeTaken;
        //    //Here CorrectAnswers.Count() is TotalQuestions
        //    report.Accuracy = (CAnswer * 100) / CorrectAnswers.Count();
        //    report.MarksScored = TMarks;
        //    report.QuizType = db.Quizs.FirstOrDefault(x => x.QuizId == evalutionAnswer.QuizId).QuizType;
        //    report.UserId = evalutionAnswer.UserId;
        //    report.QuizId = evalutionAnswer.QuizId;
        //    var userSchedule = db.UserSchedules.FirstOrDefault(x => x.QuizScheduleId == evalutionAnswer.QuizScheduleId && x.UserId == evalutionAnswer.UserId && x.QuizId == evalutionAnswer.QuizId);
        //    if (userSchedule != null)
        //    {
        //        userSchedule.Taken = true;
        //    }
        //    db.Reports.Add(report);
        //    db.SaveChanges();
        //    return Ok();
        //}

        /// <summary>
        /// Evaluates a Mock Quiz
        /// </summary>
        /// <param name="QuizId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/SubmitMockQuiz")]
        public IHttpActionResult SubmitMockQuiz([FromUri]int QuizId,[FromUri]string UserId)
        {
            var quizBuffer = db.QuizBuffers.Where(x => x.UserId == UserId && x.QuizId == QuizId).ToList();
            List<MockQuizSubmitDetails> QuesAns = new List<MockQuizSubmitDetails>();
            foreach (var item in quizBuffer)
            {
                var question = db.Questions.Find(item.QuestionId);
                QuesAns.Add(new MockQuizSubmitDetails()
                {
                    QuestionId = item.QuestionId,
                    QuestionStatement = question.QuestionStatement,
                    Option1 = question.Option1,
                    Option2 = question.Option2,
                    Option3 = question.Option3,
                    Option4 = question.Option4,
                    ImageName = question.ImageName,
                    CorrectAnswer = db.Questions.Find(item.QuestionId).Answer,
                    MarkedAnswer = item.MarkedAnswer,
                    ResponseTime = item.ResponseTime
                });
            }
            db.QuizBuffers.RemoveRange(quizBuffer);
            db.SaveChanges();
            return Ok(QuesAns);
        }

        /// <summary>
        /// Creates a Quiz with Random questions
        /// </summary>
        /// <param name="quiz"></param>
        /// <param name="TotalQuestion">Total Number of Questions to be added in the Quiz</param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Quiz/GetRandomQuestion")]
        public IHttpActionResult GenerateMockQuiz([FromBody]Quiz quiz, [FromUri]int TotalQuestion)
        {
            //var qIdsBySubject = helper.GetQuestionIdsBySubject(quiz.SubjectId);
            //List<int> qIdsBySubject = new List<int>();// temp
            List<int> subjectId = new List<int>();
            foreach (var item in quiz.Tags)
            {
                subjectId.Add(item.SubjectId);
            }
            

            var questions = db.Questions.AsEnumerable()
                .Where(y =>y.Difficulty == quiz.Difficulty && y.QuestionType == quiz.QuizType)
                .Select(x => new { x.QuestionId, x.QuestionStatement, x.Option1, x.Option2, x.Option3, x.Option4, x.ImageName, x.Marks, Tags =helper.GetQuestionSubjectTags(x.QuestionId) }).AsEnumerable()
                .Where(z => subjectId.Contains(z.Tags.Select(t => t.SubjectId).FirstOrDefault())).Select(x=>new { x.QuestionId, x.QuestionStatement, x.Option1, x.Option2, x.Option3, x.Option4, x.ImageName, x.Marks, Tags = helper.GetQuestionSubjectTags(x.QuestionId) })
                .OrderBy(y => Guid.NewGuid())
                .Take(TotalQuestion)
                .ToList();
            foreach (var item in questions)
            {
                quiz.TotalMarks += item.Marks;
            }
            quiz.TotalQuestions = questions.Count();
            if (questions.Count() > 0)
            {
                db.Quizs.Add(quiz);
                db.SaveChanges();
                foreach (var item in questions)
                {
                    db.QuizQuestions.Add(new QuizQuestion() { QuizId = quiz.QuizId, QuestionId = item.QuestionId });
                    db.SaveChanges();
                }
            }
            return Ok(questions.Count());
        }

        /// <summary>
        /// Returns individual questions
        /// </summary>
        /// <param name="UserId"></param>
        /// <param name="QuizId"></param>
        /// <param name="Index"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Quiz/GetQuizQuestion")]
        public IHttpActionResult GetQuizQuestion(string UserId, int QuizId, int Index)
        {
            var quizBuffer = db.QuizBuffers.FirstOrDefault(x => x.Index == Index && x.QuizId == QuizId && x.UserId == UserId);
            if (helper.ValidateUserId(UserId)==false || quizBuffer == null)
            {
                return BadRequest("Invalid User or Index");
            }
            var question = db.Questions.Where(y => y.QuestionId == quizBuffer.QuestionId)
                .AsEnumerable()
                .Select(x => new
                {
                    x.QuestionId,
                    x.QuestionStatement,
                    Option = new string[] { x.Option1, x.Option2, x.Option3, x.Option4 },
                    x.ImageName,
                    x.Marks,
                    x.QuestionType,
                    x.Difficulty,
                    Tags = helper.GetQuestionSubjectTags(x.QuestionId),
                    x.CreatedBy,
                    quizBuffer.MarkedAnswer,
                    quizBuffer.ResponseTime
                }).Single();
            return Ok(question);
        }

        [HttpPut]
        [Route("api/Quiz/SubmitQuestion")]
        public IHttpActionResult SubmitQuizQuestion(QuizBuffer quizBuffer)
        {
            var buffer = db.QuizBuffers.FirstOrDefault(x => x.Index == quizBuffer.Index && x.QuizId == quizBuffer.QuizId && x.UserId == quizBuffer.UserId);
            if (helper.ValidateUserId(quizBuffer.UserId) == false || buffer == null)
            {
                return BadRequest("Invalid User or Index");
            }
            buffer.MarkedAnswer=quizBuffer.MarkedAnswer;
            buffer.ResponseTime = quizBuffer.ResponseTime;
            buffer.State = quizBuffer.State;
            db.SaveChanges();
            return Ok();
        }

    }
}
