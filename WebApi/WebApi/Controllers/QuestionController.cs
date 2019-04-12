using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Drawing;
using System.Drawing.Drawing2D;
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
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class QuestionController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();

        /// <summary>
        /// Returns all the questions of a particular Subject
        /// </summary>
        /// <param name="SubjectId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Question/GetQuestion/{SubjectId:int?}")]
        public IHttpActionResult GetQuestion(int? SubjectId)
        {
            if(db.Subjects.Find(SubjectId)==null)
            {
                return BadRequest("Invalid Parameters");
            }
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

        /// <summary>
        /// Returns all the questions of a particualr difficulty and a subject
        /// </summary>
        /// <param name="Difficulty"></param>
        /// <param name="SubjectId"></param>
        /// <param name="QuestionType"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Question/GetQuestion")]
        public IHttpActionResult GetQuestionDifficultySubjectType(string Difficulty, int SubjectId, string QuestionType)
        {
            if (db.Subjects.Find(SubjectId) == null )
            {
                return BadRequest("Invalid Parameters");
            }
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

        /// <summary>
        /// Returns all the questions present in the question bank
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Creates/post a question in the question bank
        /// </summary>
        /// <returns></returns>
        [HttpPost, Microsoft.AspNetCore.Mvc.DisableRequestSizeLimit]
        [Route("api/Question/CreateQuestion")]
        public IHttpActionResult PostQuestion()
        {
            var httpRequest = HttpContext.Current.Request;
            var question = new JavaScriptSerializer().Deserialize<Question>(httpRequest.Form["QuestionDetails"]);
            Subject sub = db.Subjects.FirstOrDefault(x => x.SubjectId == question.SubjectId);
            if(sub==null)
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
                Stream stream = postedFile.InputStream;
                helper.ReduceImageSize(0.75, stream, filePath);
            }
            db.Questions.Add(question);
            db.SaveChanges();
            return StatusCode(HttpStatusCode.Created);
        }

        /// <summary>
        /// Used to edit the existing question by specifying the questionId
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/Question/Edit/{QuestionId}")]
        public IHttpActionResult EditQuestion(int QuestionId)
        {

            var httpRequest = HttpContext.Current.Request;
            var question = new JavaScriptSerializer().Deserialize<Question>(httpRequest.Form["QuestionDetails"]);

            if (QuestionId != question.QuestionId)
            {
                return BadRequest("Invalid QuestionId");
            }

            string imageName = null;
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
                Stream stream = postedFile.InputStream;
                helper.ReduceImageSize(0.75, stream, filePath);
            }

            db.Entry(question).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch(DbUpdateConcurrencyException)
            {
                if (!QuestionExists(QuestionId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return StatusCode(HttpStatusCode.OK);
        }


        /// <summary>
        /// To delete the specified question
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Get all the questions created by that particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Question/GetQuestionByUser/{UserId}")]
        public IHttpActionResult UserQuestions(string UserId)
        {
            if (db.Users.Find(UserId) == null)
            {
                return BadRequest("Invalid UserId");
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
                    Difficulty = x.Difficulty,
                    ImageName = x.ImageName
                })
                .OrderByDescending(y => y.QuestionId)
                .ToList();
            return Ok(questions);
        }

        /// <summary>
        /// Returns a question of the specified Question Id
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Question/{QuestionId}")]
        public IHttpActionResult QuestionById(int? QuestionId)
        {
            if (db.Questions.Find(QuestionId) == null)
            {
                return BadRequest("Invalid QuestionId");
            }
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

        #region Helpers
               
        private bool QuestionExists(int id)
        {
            return db.Questions.Count(x => x.QuestionId == id) > 0;
        }

        #endregion
    }
}