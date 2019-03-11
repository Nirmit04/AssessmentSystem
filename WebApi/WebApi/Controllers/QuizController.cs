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
        public IHttpActionResult CreateQuiz(Quiz quiz, string question)
        {
            string[] questionId = question.Split(',');
            int[] qId= Array.ConvertAll(questionId, s => int.Parse(s));

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
    }
}
