using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace WebApi.Controllers
{
    public class QuestionController : ApiController
    {
        private DBModel db = new DBModel();
        [HttpPut]
        [Route("api/Question/Edit/{Question_ID}")]
        public IHttpActionResult EditQuestion(int? Question_ID ,Question Question)
        {
            
            if(Question_ID==null)
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
            return StatusCode(HttpStatusCode.NoContent);
        }


        [HttpDelete]
        [Route("api/Question/Delete/{Question_ID}")]
        public IHttpActionResult DeleteQuestion(int? Question_ID)
        {
            Question question = db.Questions.Find(Question_ID);

            if (question == null)
                return NotFound();

            db.Questions.Remove(question);
            db.SaveChanges();
            return Ok(question);
        }
    }
}
