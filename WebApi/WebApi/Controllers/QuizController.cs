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
            return Ok(questions);
        }

        [HttpDelete]
        [AllowAnonymous]
        [Route("api/Quiz/Question/Delete/{QuizId}/{QuestionId}")]
        public IHttpActionResult DeleteQuestion(int QuestionId,int QuizId)
        {
            var q = db.QuizQuestions.FirstOrDefault(x => x.QuestionId == QuestionId && x.QuizId == QuizId);
            db.QuizQuestions.Remove(q);

            var question = db.Questions.FirstOrDefault(x=>x.QuestionId==QuestionId);
            var quiz = db.Quizs.FirstOrDefault(x => x.QuizId == QuizId);
            quiz.TotalMarks = quiz.TotalMarks - question.Marks;
            quiz.TotalQuestions--;

            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [Route("api/Quiz/GetType/{QuizId}")]
        public IHttpActionResult GetQuestions(int QuizId)
        {
            IEnumerable questionIds;
             questionIds = db.QuizQuestions.Where(x => x.QuizId == QuizId).
               Select(x => new
               {
                   x.QuestionId
               }).ToList();

            var quiz = from a in db.Quizs
                       join b in db.QuizQuestions on a.QuizId equals b.QuizId
                       join c in db.Questions on b.QuestionId equals c.QuestionId
                       where a.QuizId==QuizId && b.QuestionId!=c.QuestionId
                       select new
                       {
                               QuestionId = c.QuestionId,
                               QuestionStatement = c.QuestionStatement,
                               Option1 = c.Option1,
                               Option2 = c.Option2,
                               Option3 = c.Option3,
                               Option4 = c.Option4,
                               Answer = c.Answer,
                               Marks = c.Marks,
                               SubjectName = db.Subjects.Where(y => y.SubjectId == c.SubjectId).FirstOrDefault().Name,
                               SubjectId = c.SubjectId,
                               Difficulty = c.Difficulty.ToString(),
                           };
            
            
            return Ok(quiz);
        }
    }
}
