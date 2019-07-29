using System;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/Subject")]
    [Authorize]
    public class SubjectController : ApiController
    {
        private HelperClass helper = new HelperClass();
        private ISubject rSubject = new RSubject();

        /// <summary>
        /// Returns all the Tags/Subjects available
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route]
        public async Task<IHttpActionResult> GetAllSubjects()
        {
            var subject = await rSubject.GetAllSubjects();
            return Ok(subject);
        }

        /// <summary>
        /// Returns all the Tags/Subjects created by that particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("{UserId}")]
        public async Task<IHttpActionResult> GetSubjectsByUser([FromUri]string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            var subject = await rSubject.GetSubjectsByUser(UserId);
            return Ok(subject);
        }

        /// <summary>
        /// Creates A Tag/Subject
        /// </summary>
        /// <param name="subject">Model</param>
        /// <returns></returns>
        [HttpPost]
        [Route]
        public async Task<IHttpActionResult> CreateSubject([FromBody]Subject subject)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var resultSubjectCreation = await rSubject.CreateSubject(subject);
                    if (resultSubjectCreation > 0)
                    {
                        return Content(HttpStatusCode.Created, subject);
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
        /// Used to Edit the existing Tag/Subjectby specifying the subejct Id
        /// </summary>
        /// <param name="subject">Model</param>
        /// <param name="SubjectId">Mandatory</param>
        /// <returns></returns>
        [HttpPut]
        [Route("{SubjectId}")]
        public async Task<IHttpActionResult> UpdateSubject([FromUri]int SubjectId, [FromBody]Subject subject)
        {
            if (SubjectId != subject.SubjectId)
            {
                return BadRequest("Invalid SubjectId");
            }
            try
            {
                if (ModelState.IsValid)
                {
                    var resultSubjectUpdation = await rSubject.UpdateSubject(subject);
                    if (resultSubjectUpdation > 0)
                    {
                        return Content(HttpStatusCode.Accepted, subject);
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
                if (!await rSubject.SubjectExists(SubjectId))
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest(ex.Message.ToString());
                }
            }
        }

    }
}