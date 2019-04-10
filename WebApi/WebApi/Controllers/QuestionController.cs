﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Script.Serialization;
using WebApi.Models;


namespace WebApi.Controllers
{
    public class QuestionController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

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
                        QuestionType = x.QuestionType,
                        SubjectId = x.SubjectId,
                        SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                        Difficulty = x.Difficulty,
                        ImageName = x.ImageName
                    })
                    .OrderByDescending(y=>y.QuestionId)
                    .ToList();
            return Ok(questions);
        }


        [HttpGet]
        [Route("api/Question/GetQuestion")]
        public IHttpActionResult GetQuestionDifficultySubjectType(string Difficulty, int SubjectId, string QuestionType)
        {
            var questions = db.Questions
                .Where(z => z.Difficulty == Difficulty && z.SubjectId == SubjectId && z.QuestionType == QuestionType)
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
                    QuestionType = x.QuestionType,
                    SubjectId = x.SubjectId,
                    SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                    Difficulty = x.Difficulty,
                    ImageName = x.ImageName
                })
                .OrderByDescending(y => y.QuestionId)
                .ToList();
            return Ok(questions);
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
                    QuestionType = x.QuestionType,
                    SubjectId = x.SubjectId,
                    SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                    Difficulty = x.Difficulty,
                    ImageName = x.ImageName
                })
                .OrderByDescending(y => y.QuestionId)
                .ToList();
            return Ok(questions);
        }


        [HttpPost, Microsoft.AspNetCore.Mvc.DisableRequestSizeLimit]
        [Route("api/Question/CreateQuestion")]
        public IHttpActionResult PostQuestion()
        {
            var httpRequest = HttpContext.Current.Request;
            var question = new JavaScriptSerializer().Deserialize<Question>(httpRequest.Form["QuestionDetails"]);
            Subject sub = db.Subjects.FirstOrDefault(x => x.SubjectId == question.SubjectId);
            if(sub.SubjectId!=question.SubjectId)
            {
                return BadRequest();
            }

            string imageName = null;
            var postedFile = httpRequest.Files["Image"];
            if (postedFile != null)
            {
                var ImageDirectoryUrl = HttpContext.Current.Server.MapPath("/Images/");
                imageName = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).ToArray()).Replace(" ", "-");
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
                var filePath = ImageDirectoryUrl + imageName;
                question.ImageName = imageName;
                postedFile.SaveAs(filePath);
            }
            db.Questions.Add(question);
            db.SaveChanges();
            return Ok(question);
        }
        
        [HttpPut]
        [Route("api/Question/Edit/{QuestionId}")]
        public IHttpActionResult EditQuestion(int? QuestionId)
        {
            
            if(QuestionId==null)
            {
                return BadRequest();
            }

            string imageName = null;
            var httpRequest = HttpContext.Current.Request;
            var question = new JavaScriptSerializer().Deserialize<Question>(httpRequest.Form["QuestionDetails"]);
            var postedFile = httpRequest.Files["Image"];
            if (postedFile != null)
            {
                var ImageDirectoryUrl = HttpContext.Current.Server.MapPath("/Images/");
                imageName = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).ToArray()).Replace(" ", "-");
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
                var filePath = ImageDirectoryUrl + imageName;
                if (question.ImageName != null)
                {
                    File.Delete(ImageDirectoryUrl + question.ImageName);
                }
                question.ImageName = imageName;
                postedFile.SaveAs(filePath);
            }

            db.Entry(question).State = EntityState.Modified;

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
            {
                return NotFound();
            }
            if (question.ImageName != null)
            {
                File.Delete(HttpContext.Current.Server.MapPath("/Images/") + question.ImageName);
            }
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
            var questions = db.Questions
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
                    QuestionType = x.QuestionType,
                    SubjectId = x.SubjectId,
                    SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                    Difficulty = x.Difficulty.ToString(),
                    ImageName = x.ImageName
                })
                .OrderByDescending(y => y.QuestionId)
                .ToList();
            return Ok(questions);
        }


        [HttpGet]
        [Route("api/Question/{QuestionId}")]
        public IHttpActionResult QuestionById(int? QuestionId)
        {
            var question = db.Questions
                .Where(z => z.QuestionId == QuestionId)
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
                    QuestionType = x.QuestionType,
                    SubjectId = x.SubjectId,
                    SubjectName = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name,
                    Difficulty = x.Difficulty,
                    ImageName = x.ImageName
                })
                .Single();
            return Ok(question);
        }

    }
}