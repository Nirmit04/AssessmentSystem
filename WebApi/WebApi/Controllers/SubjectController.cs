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

        [HttpPost]
        [Route("api/Subject/CreateSubject")]
        public IHttpActionResult CreateSubject(Subject subject)
        {
            db.Subjects.Add(subject);
            db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = subject.SubjectId }, subject);
        }

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

        #region Helpers

        private bool SubjectExists(int id)
        {
            return db.Questions.Count(x => x.QuestionId == id) > 0;
        }

        #endregion

    }
}
