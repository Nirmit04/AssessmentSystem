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
        /// <param name="QuestionSpecs"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Question/GetQuestionBySubjects")]
        public IHttpActionResult GetQuestion(QuestionSpecs QuestionSpecs)
        {
            foreach (var item in QuestionSpecs.Tags)
            {
                if (db.Subjects.Find(item.SubjectId) == null)
                {
                    return BadRequest("Invalid Parameters");
                }
            }
            var qIds = helper.GetQuestionIdsBySubject(QuestionSpecs.Tags);
            var questions = db.Questions
                .AsEnumerable()
                .Where(z => qIds.Contains(z.QuestionId))
                .Select(x => new
                {
                    x.QuestionId,
                    x.QuestionStatement,
                    x.Option1,
                    x.Option2,
                    x.Option3,
                    x.Option4,
                    x.Answer,
                    x.Marks,
                    x.QuestionType,
                    x.Difficulty,
                    x.ImageName,
                    Tags = helper.GetSubjectTags(x.QuestionId)
                })
                .OrderByDescending(y => y.QuestionId)
                .ToList();
            return Ok(questions);
        }

        /// <summary>
        /// Returns all the questions of a particualr difficulty and a subject
        /// </summary>
        /// <param name="QuestionSpecs"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Question/GetQuestion")]
        public IHttpActionResult GetQuestionDifficultySubjectType([FromBody]QuestionSpecs QuestionSpecs)
        {
            foreach (var item in QuestionSpecs.Tags)
            {
                if (db.Subjects.Find(item.SubjectId) == null)
                {
                    return BadRequest("Invalid Parameters");
                }
            }
            var qIds = helper.GetQuestionIdsBySubject(QuestionSpecs.Tags);
            var questions = db.Questions
                .AsEnumerable()
                .Where(z => qIds.Contains(z.QuestionId) && z.Difficulty == QuestionSpecs.Difficulty && z.QuestionType == QuestionSpecs.QuestionType)
                .Select(x => new
                {
                    x.QuestionId,
                    x.QuestionStatement,
                    x.Option1,
                    x.Option2,
                    x.Option3,
                    x.Option4,
                    x.Answer,
                    x.Marks,
                    x.QuestionType,
                    x.Difficulty,
                    x.ImageName,
                    Tags = helper.GetSubjectTags(x.QuestionId)
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
                .AsEnumerable()
                .Select(x => new
                {
                    x.QuestionId,
                    x.QuestionStatement,
                    x.Option1,
                    x.Option2,
                    x.Option3,
                    x.Option4,
                    x.Answer,
                    x.Marks,
                    x.QuestionType,
                    x.Difficulty,
                    x.ImageName,
                    Tags = helper.GetSubjectTags(x.QuestionId)
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
                helper.ReduceImageSize(0.90, stream, filePath);
            }
            db.Questions.Add(question);
       
            QuestionTag questionTag;
            foreach (var item in question.Tags)
            {
                questionTag = new QuestionTag()
                {
                    QuestionId = question.QuestionId,
                    SubjectId = item.SubjectId
                };
                db.QuestionTags.Add(questionTag);
                db.SaveChanges();
            }
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
                helper.ReduceImageSize(0.90, stream, filePath);
            }

            db.Entry(question).State = EntityState.Modified;

            try
            {
                var qIds = db.QuestionTags.Where(x => x.QuestionId == question.QuestionId);
                db.QuestionTags.RemoveRange(qIds);
                QuestionTag questionTag;
                foreach (var item in question.Tags)
                {
                    questionTag = new QuestionTag()
                    {
                        QuestionId = question.QuestionId,
                        SubjectId = item.SubjectId
                    };
                    db.QuestionTags.Add(questionTag);
                }
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
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
        /// To delete the image from a question
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("api/Question/ImageDelete/{QuestionId}")]
        public IHttpActionResult DeleteQuestionImage(int QuestionId)
        {
            Question question = db.Questions.Find(QuestionId);

            if (question == null)
            {
                return NotFound();
            }

            if (question.ImageName != null)
            {
                File.Delete(HttpContext.Current.Server.MapPath("/Images/") + question.ImageName);
                question.ImageName = null;
            }

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
        public IHttpActionResult UserCreatedQuestions(string UserId)
        {
            if (db.Users.Find(UserId) == null)
            {
                return BadRequest("Invalid UserId");
            }
            var questions = db.Questions
                .AsEnumerable()
                .Where(y => y.CreatedBy == UserId)
                .Select(x => new
                {
                    x.QuestionId,
                    x.QuestionStatement,
                    x.Option1,
                    x.Option2,
                    x.Option3,
                    x.Option4,
                    x.Answer,
                    x.Marks,
                    x.QuestionType,
                    x.Difficulty,
                    x.ImageName,
                    Tags = helper.GetSubjectTags(x.QuestionId)
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
        public IHttpActionResult QuestionById(int QuestionId)
        {
            if (db.Questions.Find(QuestionId) == null)
            {
                return BadRequest("Invalid QuestionId");
            }
            var question = db.Questions
                .AsEnumerable()
                .Where(z => z.QuestionId == QuestionId)
                .Select(x => new
                {
                    x.QuestionId,
                    x.QuestionStatement,
                    x.Option1,
                    x.Option2,
                    x.Option3,
                    x.Option4,
                    x.Answer,
                    x.Marks,
                    x.QuestionType,
                    x.Difficulty,
                    x.ImageName,
                    Tags = helper.GetSubjectTags(QuestionId)
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