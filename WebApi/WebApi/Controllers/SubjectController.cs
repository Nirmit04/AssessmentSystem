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
    public class SubjectController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
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
                   x.Name,
                   x.Department,
                   x.CreatedBy
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
        public IHttpActionResult EditSubject(Subject subject,int? SubjectId)
        {
            if (SubjectId == null)
            {
                return BadRequest();
            }

            db.Entry(subject).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
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
    }
}
