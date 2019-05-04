using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class SubjectController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        HelperClass helper = new HelperClass();

        /// <summary>
        /// Returns all the Tags/Subjects available
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Subject/GetSubjects")]
        public IHttpActionResult GetSubjectAll()
        {
            var subject = db.Subjects.
                Select(x => new
                {
                   x.SubjectId,
                   x.Name
                }).ToList();
            return Ok(subject);
        }

        /// <summary>
        /// Creates A Tag/Subject
        /// </summary>
        /// <param name="subject">Model</param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/Subject/CreateSubject")]
        public IHttpActionResult CreateSubject(Subject subject)
        {
            db.Subjects.Add(subject);
            db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = subject.SubjectId }, subject);
        }

        /// <summary>
        /// Used to Edit the existing Tag/Subjectby specifying the subejct Id
        /// </summary>
        /// <param name="subject">Model</param>
        /// <param name="SubjectId">Mandatory</param>
        /// <returns></returns>
        [HttpPut]
        [Route("api/Subject/Edit/{SubjectId}")]
        public IHttpActionResult EditSubject(int SubjectId, Subject subject)
        {
            if (SubjectId != subject.SubjectId)
            {
                return BadRequest("Invalid QuestionId");
            }

            db.Entry(subject).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubjectExists(SubjectId))
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
        /// Retuns all the Tags/Subjects created by that particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Subject/GetSubjects/{UserId}")]
        public IHttpActionResult GetSubjectAll(string UserId)
        {
            if(!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid Id");
            }
            var subject = db.Subjects.Where(x=>x.CreatedBy==UserId).
                Select(x => new
                {
                    x.SubjectId,
                    x.Name,
                    x.Department,
                    x.CreatedBy
                }).ToList();
            return Ok(subject);
        }

        #region Helpers

        private bool SubjectExists(int id)
        {
            return db.Questions.Count(x => x.QuestionId == id) > 0;
        }

        #endregion

    }
}
