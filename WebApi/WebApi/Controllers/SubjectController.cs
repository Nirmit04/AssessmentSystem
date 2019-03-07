using System;
using System.Collections.Generic;
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
        [Route("api/Subject/GetSubjectAll")]
        public IQueryable<Subject> GetSubjectAll()
        {
            return db.Subjects;
        }

        [HttpPost]
        [Route("api/Subject/CreateSubject")]
        public IHttpActionResult CreateSubject(Subject subject)
        {
            db.Subjects.Add(subject);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = subject.SubjectId }, subject);
        }
    }
}
