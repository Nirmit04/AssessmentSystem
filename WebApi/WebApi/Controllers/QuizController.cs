using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class QuizController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpPost]
        [Route("api/Quiz/CreateQuiz")]
        public IHttpActionResult CreateQuiz(Quiz quiz)
        {
            foreach (var item in quiz.qId)
            {
                System.Diagnostics.Debug.WriteLine(quiz.qId);
            }
            Question ques = new Question();
            quiz.TotalMarks = 0;
            quiz.TotalQuestions = quiz.qId.Length;
            foreach (var item in quiz.qId)
            {
                ques = db.Questions.Find(item);
                quiz.TotalMarks += ques.Marks;
            }
            quiz.ArchiveStatus = false;
            db.Quizs.Add(quiz);

            QuizQuestion quizQuestion = new QuizQuestion();

            foreach (var item in quiz.qId)
            {
                quizQuestion.QuizId = quiz.QuizId;
                quizQuestion.QuestionId = item;
                db.QuizQuestions.Add(quizQuestion);
                db.SaveChanges();
            }

            db.SaveChanges();
            return Ok();

        }

        [HttpGet]
        [Route("api/Quiz/GetQuiz/{CreatedBy}")]
        public IHttpActionResult GetQuiz(string CreatedBy)
        {
            var quiz = db.Quizs.Where(x => x.CreatedBy == CreatedBy).Where(x => x.ArchiveStatus == false).
                Select(x => new
                {
                    QuizId = x.QuizId,
                    Difficulty = x.Difficulty,
                    TotalQuestions = x.TotalQuestions,
                    TotalMarks = x.TotalMarks,
                    ArchiveStatus = x.ArchiveStatus,
                    QuizType = x.QuizType,
                    Subject = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name
                }).ToList();
            return Ok(quiz);
        }

        [HttpDelete]
        [Route("api/Quiz/Delete/{QuizId}")]
        public IHttpActionResult CreateQuiz(int QuizId)
        {
            Quiz quiz = db.Quizs.Find(QuizId);
            System.Diagnostics.Debug.WriteLine(quiz.QuizId);
            quiz.ArchiveStatus = true;
            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [Route("api/Quiz/Question/{QuizId}")]
        public IHttpActionResult GetQuiz(int QuizId)
        {
            var questionIds = db.QuizQuestions.Where(x => x.QuizId == QuizId).
                Select(x => new
                {
                    x.QuestionId
                }).ToList();

            List<object> questions = new List<object>();
            
            foreach (var item in questionIds)
            {   
                System.Diagnostics.Debug.WriteLine(item.QuestionId);
                var q = db.Questions.Where(y => y.QuestionId == item.QuestionId).
                     Select(x => new
                     {
                         x.QuestionId,
                         x.QuestionStatement,
                         x.Marks,
                         x.Difficulty,
                         x.CreatedBy
                     });
                questions.Add(q);
            }

            foreach (var item in questions)
            {
                System.Diagnostics.Debug.WriteLine(item.ToString());
            }
           // var json = JsonConvert.SerializeObject(questions, Formatting.Indented);
            return Ok(questions);
        }

        [HttpDelete]
        [AllowAnonymous]
        [Route("api/Quiz/Question/Delete/{QuizId}/{QuestionId}")]
        public IHttpActionResult DeleteQuestion(int QuestionId,int QuizId)
        {
            if(QuestionId==null || QuizId == null)
            {
                return BadRequest();
            }

            var q = db.QuizQuestions.FirstOrDefault(x => x.QuestionId == QuestionId && x.QuizId == QuizId);
            db.QuizQuestions.Remove(q);
            db.SaveChanges();
            return Ok();
        }
    }
}
