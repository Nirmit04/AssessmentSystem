using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class QuestionController : ApiController
    {
        private DBModel db = new DBModel();

        [HttpGet]
        [Route("api/Question/Get/{Difficulty:int?}/{Subject_ID:int?}")]
        public IHttpActionResult GetAllQuestions(int? Difficulty, int? Subject_ID)
        {
            if (Difficulty.HasValue)
            {
                var questions = db.Questions
                    .Where(z => z.Difficulty == Difficulty)
                    .Select(x => new
                    {
                        Question_ID = x.Question_ID,
                        QuestionStatement = x.QuestionStatement,
                        Option1 = x.Option1,
                        Option2 = x.Option2,
                        Option3 = x.Option3,
                        Option4 = x.Option4,
                        Answer = x.Answer,
                        Marks = x.Marks,
                        SubjectName = db.Subjects.Where(y => y.Subject_ID == x.Subject_ID).FirstOrDefault().Name,
                        DifficultyLevel = (Difficulty)x.Difficulty,
                        ImageName = x.ImageName
                    })
                    .ToList();
            }
            else if (Subject_ID.HasValue)
            {
                var questions = db.Questions
                    .Where(z => z.Subject_ID == Subject_ID)
                    .Select(x => new
                    {
                        Question_ID = x.Question_ID,
                        QuestionStatement = x.QuestionStatement,
                        Option1 = x.Option1,
                        Option2 = x.Option2,
                        Option3 = x.Option3,
                        Option4 = x.Option4,
                        Answer = x.Answer,
                        Marks = x.Marks,
                        SubjectName = db.Subjects.Where(y => y.Subject_ID == x.Subject_ID).FirstOrDefault().Name,
                        DifficultyLevel = (Difficulty)x.Difficulty,
                        ImageName = x.ImageName
                    })
                    .ToList();
            }
            return Ok(questions);
        }

        //[HttpGet]
        //[Route("api/Question/Get/{Difficulty}/{Subject_ID}")]
        //public IHttpActionResult GetQuestion(int Difficulty, int Subject_ID)
        //{
        //    List<Question> questions = db.Questions.Where(x => x.Difficulty == Difficulty).ToList();
        //    return Ok(questions);
        //}


        // GET: api/Question/5
        [ResponseType(typeof(Question))]
        public IHttpActionResult GetQuestion(int id)
        {
            Question question = db.Questions.Find(id);
            if (question == null)
            {
                return NotFound();
            }

            return Ok(question);
        }


        // POST: api/Question
        [ResponseType(typeof(Question))]
        public IHttpActionResult PostQuestion(Question question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Questions.Add(question);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = question.Question_ID }, question);
        }
    }
}