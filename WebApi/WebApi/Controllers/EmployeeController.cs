
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        /**
         * This method is used to find the list of quiz assigned to that particular user
         * @Params- UserId of string type
         * @Returns -List of quizzes assigned.
         * **/
        [HttpGet]
        [Route("api/Employee/NonMock/{UserId}")]
        public IHttpActionResult GetNonMockQuiz(string UserId)
        {
            List<int> ScheduleIds = db.UserSchedules.Where(x => x.UserId == UserId && x.Taken==false).Select(x=>x.QuizScheduleId).Distinct().ToList();
            var Quiz = db.QuizSchedules.Where(x => ScheduleIds.Contains(x.QuizId)).
                Select(x => new
                {
                    x.QuizId,
                    db.Quizs.FirstOrDefault(z => z.QuizId == x.QuizId).QuizName,
                    x.EndDateTime,
                    x.StartDateTime

                });
            return Ok(Quiz);
        }

        

    }
}
