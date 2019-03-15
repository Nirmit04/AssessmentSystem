using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class QuizScheduleController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpPost]
        [Route("api/Schedule")]
        public IHttpActionResult ScheduleCreate(QuizScheduleController quizSchedule1)
        {
            return Ok();
        }
    }
}
