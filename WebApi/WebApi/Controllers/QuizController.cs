using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/Quiz")]
    [Authorize]
    public class QuizController : ApiController
    {
        private HelperClass helper = new HelperClass();
        private IQuiz rQuiz = new RQuiz();
        private IQuestion rQuestion = new RQuestion();
        private IQuizQuestion rQuizQuestion = new RQuizQuestion();
        private IQuizTag rQuizTag = new RQuizTag();
        private IQuizBuffer rQuizBuffer = new RQuizBuffer();
        private IDetailedReport rDetailedReport = new RDetailedReport();
        private IUserSchedule rUserSchedule = new RUserSchedule();
        private IReport rReport = new RReport();

        /// <summary>
        /// Returns all the quiz present
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route]
        public async Task<IHttpActionResult> GetAllQuizzes()
        {
            var quizList = await rQuiz.GetAllQuizzes();
            return Ok(quizList);
        }

        /// <summary>
        /// Adds a new question to an existing quiz
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("NameType")]
        public async Task<IHttpActionResult> GetAllQuizNameType()
        {
            var quizList = await rQuiz.GetAllQuizzes();
            return Ok(quizList);
        }

        /// <summary>
        /// Returns the quiz created by that particular user/content creator
        /// </summary>
        /// <param name="UserId">User Id</param>
        /// <returns></returns>
        [HttpGet]
        [Route("{CreatedBy}")]
        public async Task<IHttpActionResult> GetQuizzesByUsers([FromUri]string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            var quizList = await rQuiz.GetQuizzesByUserStatus(UserId, false);
            return Ok(quizList);
        }

        /// <summary>
        /// Returns all the mock quiz present
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("Mock")]
        public async Task<IHttpActionResult> GetAllMockQuiz()
        {
            var quizList = await rQuiz.GetQuizzesByType("Mock", false);
            return Ok(quizList);
        }

        /// <summary>
        /// Returns all scheduled quiz present
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("Scheduled")]
        public async Task<IHttpActionResult> GetAllScheduledQuiz()
        {
            var quizList = await rQuiz.GetQuizzesByType("Scheduled", false);
            return Ok(quizList);
        }

        /// <summary>
        /// Returns all the quizzes archived by that user
        /// </summary>
        /// <param name="UserId">UserId</param>
        /// <returns></returns>
        [HttpGet]
        [Route("Archived/{CreatedBy}")]
        public async Task<IHttpActionResult> GetAllArchviedQuizzes([FromUri]string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid User");
            }
            var quizList = await rQuiz.GetQuizzesByUserStatus(UserId, true);
            return Ok(quizList);
        }

        /// <summary>
        /// Created a quiz and associates the list of questions to that quiz
        /// </summary>
        /// <param name="quiz">Quiz Model</param>
        /// <returns></returns>
        [HttpPost]
        [Route]
        public async Task<IHttpActionResult> CreateQuiz([FromBody]Quiz quiz)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var resultQuizCreation = await rQuiz.CreateQuiz(quiz);
                    if (resultQuizCreation > 0)
                    {
                        return Content(HttpStatusCode.Created, quiz);
                    }
                    else
                    {
                        return BadRequest("Not Created");
                    }
                }
                else
                {
                    return BadRequest("Invalid ModelState");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }
        }

        /// <summary>
        /// Used to invert a quiz archive status based on QuizId
        /// </summary>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("{QuizId}")]
        public async Task<IHttpActionResult> InvertQuizArchiveStatus([FromUri]int QuizId)
        {
            Quiz quiz = await rQuiz.InvertQuizArchiveStatus(QuizId);
            if (quiz == null)
            {
                return NotFound();
            }
            return Ok();
        }
        

        /// <summary>
        /// Triggers TakeQuiz Function Mock and Scheduled, Creates Buffer, Resumes Quiz,  
        /// </summary>
        /// <param name="QuizId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("TakeQuiz")]
        public async Task<IHttpActionResult> TakeQuiz([FromUri]int QuizId, [FromUri]string UserId)
        {
            if (!helper.ValidateQuizId(QuizId))
            {
                return BadRequest("Invalid QuizId");
            }
            var quiz = await rQuiz.GetQuizById(QuizId);
            var qIds = await rQuizQuestion.GetQuizQuestionIds(QuizId);
            if (quiz.QuizType == "Scheduled")
            {
                if (!helper.ValidateUserId(UserId))
                {
                    return BadRequest("Invalid UserId");
                }
                var tempQuizBuffer = await rQuizBuffer.GetQuizBufferUsersQuiz(QuizId, UserId);
                
                if (tempQuizBuffer.Count() == quiz.TotalQuestions)
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
                    var TimeLeft = DateTime.Parse(quiz.QuizTime) - time;
                    ResumeQuizBuffer resumeQuizBuffer = new ResumeQuizBuffer()
                    {
                        GetQuestionBuffers = getQuestionBuffer,
                        TimeLeft = TimeLeft.ToString()
                    };
                    return Ok(resumeQuizBuffer);
                }
                else
                {
                    try
                    {
                        if (ModelState.IsValid)
                        {
                            var resultQuizBufferCreation = await rQuizBuffer.CreateQuizBuffer(qIds, QuizId, UserId);
                            if (resultQuizBufferCreation > 0)
                            {
                                return Ok("Quiz Started");
                            }
                            else
                            {
                                return BadRequest("QuizBuffer Not Created");
                            }
                        }
                        else
                        {
                            return BadRequest("Invalid ModelState");
                        }
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex.Message.ToString());
                    }
                }
            }
            else
            {
                var questions = await rQuestion.GetAllQuestionsByIds(qIds);
                var questionList = questions
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
                        x.CreatedBy
                    }).ToList();
                return Ok(questionList);
            }
        }

        /// <summary>
        /// Used to delete a question from the quiz
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("DeleteQuizQuestion/{QuizId}/{QuestionId}")]
        public async Task<IHttpActionResult> DeleteQuestion([FromUri]int QuestionId, [FromUri]int QuizId)
        {
            if(!helper.ValidateQuestionId(QuestionId) || !helper.ValidateQuizId(QuizId))
            {
                return BadRequest("Invalid Parameters");
            }
            var resultQuizQuestionDeletion = await rQuizQuestion.DeleteQuizQuestion(QuestionId, QuizId);
            if (resultQuizQuestionDeletion > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Returns all the questions which are not present in the quiz specified
        /// </summary>
        /// <param name="QuizId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetQuestionsNotInQuiz/{QuizId}")]
        public async Task<IHttpActionResult> GetQuestionsNotInQuiz([FromUri]int QuizId)
        {
            if (!helper.ValidateQuizId(QuizId))
            {
                return BadRequest("Invalid QuizId");
            }
            var quiz = await rQuiz.GetQuizById(QuizId);
            var qIdsInQuiz = await rQuizQuestion.GetQuizQuestionIds(QuizId);
            var subjectIds = await rQuizTag.GetQuizTagsByQuiz(quiz.QuizId);
            var questionIdsOfSameSubject = helper.GetQuestionIdsBySubject(subjectIds);
            var qIdsNotInQuiz = questionIdsOfSameSubject.Except(qIdsInQuiz).ToList();
            var questionList = await rQuestion.GetQuestionsByDifficultyType(qIdsNotInQuiz, quiz.Difficulty, quiz.QuizType);
            return Ok(questionList);
        }

        /// <summary>
        /// Adds a new question to an existing quiz
        /// </summary>
        /// <param name="QuizId"></param>
        /// <param name="QuestionIds"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("AddQuizQuestion/{QuizId}")]
        public async Task<IHttpActionResult> AddQuestions([FromUri]int QuizId, [FromBody]int[] QuestionIds)
        {
            if (!helper.ValidateQuizId(QuizId))
            {
                return NotFound();
            }
            Quiz quiz = await rQuiz.GetQuizById(QuizId);
            var resultQuizQuestionCreation = await rQuizQuestion.AddQuizQuestions(quiz, QuestionIds);
            if (resultQuizQuestionCreation == QuestionIds.Count())
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Submit the Quiz and Call Evaluation Method which creates a Report and also a Detailed Report which calculates marks correct, incorrect, unattempted and TotalResponse of a Scheduled Quiz
        /// </summary>
        /// <param name="submitQuiz"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("SubmitScheduledQuiz")]
        public async Task<IHttpActionResult> SubmitScheduledQuiz([FromBody]SubmitQuiz submitQuiz)
        {
            var quizBuffer = await rQuizBuffer.GetQuizBufferUsersQuiz(submitQuiz.QuizId, submitQuiz.UserId);
            var quiz = await rQuiz.GetQuizById(submitQuiz.QuizId);
            List<int> qIds = quizBuffer.Select(x => x.QuestionId).ToList();
            var questions = await rQuestion.GetAllQuestionsByIds(qIds);
            var CorrectAnswers = questions
                .AsEnumerable()
                .OrderBy(x => { return Array.IndexOf(qIds.ToArray(), x.QuestionId); })
                .Select(z => new { z.Answer, z.Marks })
                .ToList();
            int i = 0, CAnswer = 0, WAnswer = 0, UAttempted = 0;
            decimal TMarks = 0;
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

                if (quiz.QuizType == "Scheduled")
                {
                    DetailedReport detailedReport = new DetailedReport()
                    {
                        AttemptedAnswer = item.MarkedAnswer,
                        CorrectAnswer = CorrectAnswers[i].Answer,
                        QuizId = submitQuiz.QuizId,
                        QuestionId = item.QuestionId,
                        UserId = submitQuiz.UserId,
                        ResponseTime = item.ResponseTime,
                    };
                    var resultDetailedReportCreation = await rDetailedReport.CreateDetailedReport(detailedReport);
                    if (resultDetailedReportCreation == 0)
                    {
                        return BadRequest();
                    }
                }
                i++;
            }
            Report report = new Report()
            {
                CorrectAnswers = CAnswer,
                WrongAnswers = WAnswer,
                UnattemptedAnswers = UAttempted,
                TimeTaken = submitQuiz.TotalResponseTime,
                //Here CorrectAnswers.Count() is TotalQuestions
                Accuracy = (CAnswer * 100) / CorrectAnswers.Count(),
                MarksScored = TMarks,
                QuizType = quiz.QuizType,
                UserId = submitQuiz.UserId,
                QuizId = submitQuiz.QuizId
            };
            
            var userSchedule = await rUserSchedule.GetUserSchedule(submitQuiz.QuizScheduleId, submitQuiz.UserId, submitQuiz.QuizId);
            if (userSchedule != null)
            {
                var resultUserScheduleTakenStatusUpdation = await rUserSchedule.UpdateUserScheduleTakenStatus(userSchedule);
                if (resultUserScheduleTakenStatusUpdation == 0)
                {
                    return BadRequest();
                }
            }

            var resultReportCreation = await rReport.CreateReport(report);
            if (resultReportCreation == 0)
            {
                return BadRequest();
            }
            if (quiz.QuizType == "Scheduled")
            {
                var quizBufferCount = quizBuffer.Count();
                var resultQuizBufferDeletion = await rQuizBuffer.DeleteQuizBuffer(quizBuffer);
                if (resultQuizBufferDeletion != quizBuffer.Count())
                {
                    return BadRequest();
                }
            }
            return Ok("Quiz Submitted Successfully");
        }

        /// <summary>
        /// Evaluates a Mock Quiz
        /// </summary>
        /// <param name="QuizId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("SubmitMockQuiz")]
        public async Task<IHttpActionResult> SubmitMockQuiz([FromUri]int QuizId,[FromUri]string UserId)
        {
            var quizBuffer = await rQuizBuffer.GetQuizBufferUsersQuiz(QuizId, UserId);
            List<MockQuizSubmitDetails> QuesAns = new List<MockQuizSubmitDetails>();
            foreach (var item in quizBuffer)
            {
                var question = await rQuestion.GetQuestionById(item.QuestionId);
                QuesAns.Add(new MockQuizSubmitDetails()
                {
                    QuestionId = item.QuestionId,
                    QuestionStatement = question.QuestionStatement,
                    Option1 = question.Option1,
                    Option2 = question.Option2,
                    Option3 = question.Option3,
                    Option4 = question.Option4,
                    ImageName = question.ImageName,
                    CorrectAnswer = question.Answer,
                    MarkedAnswer = item.MarkedAnswer,
                    ResponseTime = item.ResponseTime
                });
            }
            var quizBufferCount = quizBuffer.Count();
            var resultQuizBufferDeletion = await rQuizBuffer.DeleteQuizBuffer(quizBuffer);
            if (resultQuizBufferDeletion != quizBuffer.Count())
            {
                return BadRequest();
            }
            return Ok(QuesAns);
        }

        /// <summary>
        /// Creates a Quiz with Random questions
        /// </summary>
        /// <param name="quiz"></param>
        /// <param name="TotalQuestion">Total Number of Questions to be added in the Quiz</param>
        /// <returns></returns>
        [HttpPost]
        [Route("GenerateRandomMockQuiz")]
        public async Task<IHttpActionResult> GenerateRandomMockQuiz([FromBody]Quiz quiz, [FromUri]int TotalQuestion)
        {
            List<int> subjectIds = quiz.Tags.Select(x => x.SubjectId).ToList();
            var questionIdsOfSubject = helper.GetQuestionIdsBySubject(subjectIds);
            var randomQuestionLists = await rQuestion.GetRandomQuestions(questionIdsOfSubject, quiz.Difficulty, quiz.QuizType, TotalQuestion);
            var randomQuestions = randomQuestionLists
                .AsEnumerable()
                .Select(x => new
                {
                    x.QuestionId,
                    x.QuestionStatement,
                    x.Option1,
                    x.Option2,
                    x.Option3,
                    x.Option4,
                    x.ImageName,
                    x.Marks,
                    Tags = helper.GetQuestionSubjectTags(x.QuestionId)
                }).ToList();
            var randomQIds = randomQuestions.Select(x => x.QuestionId).ToList();
            quiz.TotalMarks = randomQuestions.Sum(x => x.Marks);
            quiz.TotalQuestions = randomQIds.Count();
            
            if (randomQIds.Count() > 0)
            {
                var resultRandomQuizCreation = await rQuiz.CreateRandomQuiz(quiz, randomQIds);
                if (resultRandomQuizCreation < 0)
                {
                    return BadRequest();
                }
            }
            return Ok(randomQIds.Count());
        }

        /// <summary>
        /// Returns individual questions
        /// </summary>
        /// <param name="UserId"></param>
        /// <param name="QuizId"></param>
        /// <param name="Index"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetQuizQuestion")]
        public async Task<IHttpActionResult> GetQuizQuestion(string UserId, int QuizId, int Index)
        {
            var quizBuffer = await rQuizBuffer.GetQuizBuffer(UserId, QuizId, Index);
            if (!helper.ValidateUserId(UserId) || quizBuffer == null)
            {
                return BadRequest("Invalid UserId or Index");
            }
            var question = await rQuestion.GetQuestionById(quizBuffer.QuestionId);

            TestQuestion testQuestion = new TestQuestion()
            {
                QuestionId = question.QuestionId,
                QuestionStatement = question.QuestionStatement,
                Option = new string[] { question.Option1, question.Option2, question.Option3, question.Option4 },
                ImageName = question.ImageName,
                Marks = question.Marks,
                QuestionType = question.QuestionType,
                Difficulty = question.Difficulty,
                Tags = helper.GetQuestionSubjectTags(question.QuestionId),
                CreatedBy = question.CreatedBy,
                MarkedAnswer = quizBuffer.MarkedAnswer,
                ResponseTime = quizBuffer.ResponseTime
            };
            return Ok(testQuestion);
        }

        /// <summary>
        /// Submit the Quiz Question one by one
        /// </summary>
        /// <param name="quizBuffer"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("SubmitQuestion")]
        public async Task<IHttpActionResult> SubmitQuizQuestion([FromBody]QuizBuffer quizBuffer)
        {
            var tempBuffer = await rQuizBuffer.GetQuizBuffer(quizBuffer.UserId, quizBuffer.QuizId, quizBuffer.Index);
            if (!helper.ValidateUserId(quizBuffer.UserId) || tempBuffer == null)
            {
                return BadRequest("Invalid UserId or Index");
            }
            tempBuffer.MarkedAnswer = quizBuffer.MarkedAnswer;
            tempBuffer.ResponseTime = quizBuffer.ResponseTime;
            tempBuffer.State = quizBuffer.State;
            if (ModelState.IsValid)
            {
                var resultQuizBufferUpdation = await rQuizBuffer.UpdateQuizBuffer(tempBuffer);
                if (resultQuizBufferUpdation > 0)
                {
                    return Ok("Question Submitted");
                }
                else
                {
                    return StatusCode(HttpStatusCode.NotModified);
                }
            }
            else
            {
                return BadRequest("Invalid ModelState");
            }
        }

    }
}
