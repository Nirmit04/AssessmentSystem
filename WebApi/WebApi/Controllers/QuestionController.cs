using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Script.Serialization;
using WebApi.Models;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/Question")]
    [Authorize]
    public class QuestionController : ApiController
    {
        
        private HelperClass helper = new HelperClass();
        private IQuestion rQuestion = new RQuestion();
        private readonly string ImageDirectoryUrl = HttpContext.Current.Server.MapPath("/Images/");

        /// <summary>
        /// Returns all the questions present in the question bank
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route]
        public async Task<IHttpActionResult> GetAllQuestion()
        {
            var questionList = await rQuestion.GetAllQuestions();
            return Ok(questionList);
        }

        /// <summary>
        /// Returns a question of the specified Question Id
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{QuestionId}")]
        public async Task<IHttpActionResult> GetQuestionById([FromUri]int QuestionId)
        {
            var question = await rQuestion.GetQuestionById(QuestionId);
            if (question != null)
            {
                return Ok(question);
            }
            else
            {
                return NotFound();
            }
        }

        /// <summary>
        /// Get all the questions created by that particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{UserId}")]
        public async Task<IHttpActionResult> GetQuestionsByUsers([FromUri]string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            var questionList = await rQuestion.GetQuestionsByUsers(UserId);
            return Ok(questionList);
        }

        /// <summary>
        /// Creates a question in the question bank
        /// </summary>
        /// <returns></returns>
        [HttpPost, Microsoft.AspNetCore.Mvc.DisableRequestSizeLimit]
        [Route]
        public async Task<IHttpActionResult> CreateQuestion()
        {
            var httpRequest = HttpContext.Current.Request;
            Question question = new JavaScriptSerializer().Deserialize<Question>(httpRequest.Form["QuestionDetails"]);

            var postedFile = httpRequest.Files["Image"];
            if (postedFile != null)
            {
                question.ImageName = helper.ImageProperties(postedFile, ImageDirectoryUrl);
            }
            try
            {
                if (ModelState.IsValid)
                {
                    var resultQuestionCreation = await rQuestion.CreateQuestion(question);
                    if (resultQuestionCreation > 0)
                    {
                        return Content(HttpStatusCode.Created, question);
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
        /// Returns all the questions of a particular Subject, Difficulty, Type
        /// </summary>
        /// <param name="questionSpecs"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("ByDifficulty-QuestionType-Tags")]
        public async Task<IHttpActionResult> GetQuestionsByDifficultyQuestionTypeTags([FromBody]QuestionSpecs questionSpecs)
        {
            foreach (var item in questionSpecs.Tags)
            {
                if (!helper.ValidateSubjectId(item.SubjectId))
                {
                    return BadRequest("Invalid Parameters");
                }
            }
            var subjectIds = questionSpecs.Tags.Select(x => x.SubjectId).ToList();
            var qIds = helper.GetQuestionIdsBySubject(subjectIds);
            var questionList = await rQuestion.GetQuestionsByDifficultyType(qIds, questionSpecs.Difficulty, questionSpecs.QuestionType);
            return Ok(questionList);
        }

        /// <summary>
        /// Used to edit the existing question by specifying the questionId
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
        [HttpPut]
        [Route("{QuestionId}")]
        public async Task<IHttpActionResult> UpdateQuestion([FromUri]int QuestionId)
        {
            var httpRequest = HttpContext.Current.Request;
            var question = new JavaScriptSerializer().Deserialize<Question>(httpRequest.Form["QuestionDetails"]);

            if (QuestionId != question.QuestionId)
            {
                return BadRequest("Invalid QuestionId");
            }

            var postedFile = httpRequest.Files["Image"];
            if (postedFile != null)
            {
                question.ImageName = helper.ImageProperties(postedFile, ImageDirectoryUrl);
                if (question.ImageName != null)
                {
                    File.Delete(ImageDirectoryUrl + question.ImageName);
                }
            }
            
            try
            {
                if (ModelState.IsValid)
                {
                    var resultQuestionUpdation = await rQuestion.UpdateQuestion(QuestionId, question);
                    if (resultQuestionUpdation > 0)
                    {
                        return Content(HttpStatusCode.Accepted, question);
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
            catch (DbUpdateConcurrencyException ex)
            {
                if (!await rQuestion.QuestionExists(QuestionId))
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest(ex.Message.ToString());
                }
            }
        }

        /// <summary>
        /// To delete the specified question
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("{QuestionId}")]
        public async Task<IHttpActionResult> DeleteQuestion([FromUri]int QuestionId)
        {
            Question question = await rQuestion.DeleteQuestion(QuestionId);
            if (question == null)
            {
                return NotFound();
            }
            if (question.ImageName != null)
            {
                File.Delete(ImageDirectoryUrl + question.ImageName);
            }
            return Ok();
        }

        /// <summary>
        /// To delete the image from a question
        /// </summary>
        /// <param name="QuestionId"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("ImageDelete/{QuestionId}")]
        public async Task<IHttpActionResult> DeleteQuestionImage([FromUri]int QuestionId)
        {
            string questionImageName = await rQuestion.DeleteQuestionImage(QuestionId);

            if (questionImageName == null)
            {
                return Content(HttpStatusCode.NotFound, "ImageNotFound");
            }

            if (questionImageName != null)
            {
                File.Delete(ImageDirectoryUrl + questionImageName);
            }
            return Ok();
        }

    }
}