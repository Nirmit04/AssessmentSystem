﻿using System;
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
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        [Route("api/Question/GetQuestionAll")]
        public IQueryable<Question> GetQuestionAll()
        {
            return db.Questions;
        }

        [HttpGet]
        [Route("api/Question/GetQuestion/{SubjectId:int?}")]
        public IHttpActionResult GetQuestion(int? SubjectId)
        {
            var questions = db.Questions
                    .Where(z => z.SubjectId == SubjectId)
                    .Select(x => new
                    {
                        QuestionId = x.QuestionId,
                        QuestionStatement = x.QuestionStatement,
                        Option1 = x.Option1,
                        Option2 = x.Option2,
                        Option3 = x.Option3,
                        Option4 = x.Option4,
                        Answer = x.Answer,
                        Marks = x.Marks,
                        SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                        Difficulty = x.Difficulty,
                        ImageName = x.ImageName
                    }).ToList();
            return Ok(questions);
        }


        [HttpGet]
        [Route("api/Question/GetQuestion/{Difficulty}/{SubjectId}")]
        public IHttpActionResult GetAllQuestions(string Difficulty, int SubjectId)
        {
            var questions = db.Questions
                .Where(z => z.Difficulty == Difficulty && z.SubjectId == SubjectId)
                .Select(x => new
                {
                    QuestionId = x.QuestionId,
                    QuestionStatement = x.QuestionStatement,
                    Option1 = x.Option1,
                    Option2 = x.Option2,
                    Option3 = x.Option3,
                    Option4 = x.Option4,
                    Answer = x.Answer,
                    Marks = x.Marks,
                    SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                    Difficulty = x.Difficulty,
                    ImageName = x.ImageName
                })
                .ToList();
            return Ok(db.Questions);
        }


        [HttpGet]
        [Route("api/Question/GetAllQuestions")]
        public IHttpActionResult GetAllQuestion()
        {
            var questions = db.Questions
                .Select(x => new
                {
                    QuestionId = x.QuestionId,
                    QuestionStatement = x.QuestionStatement,
                    Option1 = x.Option1,
                    Option2 = x.Option2,
                    Option3 = x.Option3,
                    Option4 = x.Option4,
                    Answer = x.Answer,
                    Marks = x.Marks,
                    SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                    Difficulty = x.Difficulty,
                    ImageName = x.ImageName
                }).ToList();
            return Ok(questions);
        }


        [HttpPost]
        [Route("api/Question/CreateQuestion")]
        public IHttpActionResult PostQuestion(Question question)
        {
            db.Questions.Add(question);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = question.QuestionId }, question);
        }
        
        [HttpPut]
        [Route("api/Question/Edit/{QuestionId}")]
        public IHttpActionResult EditQuestion(int? QuestionId ,Question Question)
        {
            
            if(QuestionId==null)
            {
                return BadRequest();
            }

            db.Entry(Question).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch(DbUpdateConcurrencyException)
            {
                return NotFound();
            }
            return StatusCode(HttpStatusCode.OK);
        }


        [HttpDelete]
        [Route("api/Question/Delete/{QuestionId}")]
        public IHttpActionResult DeleteQuestion(int? QuestionId)
        {
            Question question = db.Questions.Find(QuestionId);

            if (question == null)
                return NotFound();

            db.Questions.Remove(question);
            db.SaveChanges();
            return Ok(question);
        }

        
        [HttpGet]
        [Route("api/Question/GetQuestionByUser/{UserId}")]
        public IHttpActionResult UserQuestions(string UserId)
        {
            if (UserId == null)
            {
                return BadRequest();
            }

            var result = db.Questions
                .Where(x => x.CreatedBy == UserId)
                .Select(x => new {
                    QuestionId = x.QuestionId,
                    QuestionStatement = x.QuestionStatement,
                    Option1 = x.Option1,
                    Option2 = x.Option2,
                    Option3 = x.Option3,
                    Option4 = x.Option4,
                    Answer = x.Answer,
                    Marks = x.Marks,
                    SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                    SubjectId=x.SubjectId,
                    Difficulty = x.Difficulty.ToString(),
                    ImageName = x.ImageName
                });

            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(result);
            }
        }

    }
}