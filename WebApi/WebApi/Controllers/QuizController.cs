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
        public IHttpActionResult CreateQuiz(Quiz quiz, int[] qId)
        {
            foreach (var item in qId)
            {
                System.Diagnostics.Debug.WriteLine(qId);
            }
            Question ques=new Question();
            quiz.TotalMarks = 0;
            foreach (var item in qId)
            {
                 ques = db.Questions.Find(qId[item]);
                 quiz.TotalMarks += ques.Marks;
            }
            quiz.ArchiveStatus = false;
            db.Quizs.Add(quiz);

            QuizQuestion quizQuestion = new QuizQuestion();
            quizQuestion.QuizId = quiz.QuizId;
            foreach (var item in qId)
            {
                quizQuestion.QuestionId = item;
                db.QuizQuestions.Add(quizQuestion);
            }

            db.SaveChanges();
            return Ok();

        }

        [HttpPost]
        [Route("api/Quiz/GetQuiz/{CreatedBy}")]
        public IHttpActionResult CreateQuiz(string CreatedBy)
        {
            var quiz = db.Quizs.Where(x => x.CreatedBy == CreatedBy).
                Select(x => new {
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
    }
}
