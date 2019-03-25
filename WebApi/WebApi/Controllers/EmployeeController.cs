﻿
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
            var quizScheduleIds = db.UserSchedules.Where(x => x.UserId == UserId && x.Taken == false).Select(x => x.QuizScheduleId).ToList();
            var quizIds = db.QuizSchedules.Where(x => quizScheduleIds.Contains(x.QuizScheduleId)).Select(y => y.QuizId).ToList();
            var Quiz = db.Quizs.Where(x => quizIds.Contains(x.QuizId) && x.QuizType == "Non-Mock")
                .Select(x => new
                {
                    db.QuizSchedules.FirstOrDefault(y => y.QuizId == x.QuizId).QuizScheduleId,
                    x.QuizId,
                    x.QuizName,
                    db.QuizSchedules.FirstOrDefault(y => y.QuizId == x.QuizId).StartDateTime,
                    db.QuizSchedules.FirstOrDefault(y => y.QuizId == x.QuizId).EndDateTime
                });
            return Ok(Quiz);
        }


        [HttpGet]
        [Route("api/Employee/TakenQuizCount/{UserId}")]
        public IHttpActionResult TakenQuiz(string UserId)
        {
            Dictionary<string, int> QuizCount = new Dictionary<string, int>();
            var MockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock").Count();
            var NonMockCount = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Non-Mock").Count();
            QuizCount.Add("Mock", MockCount);
            QuizCount.Add("Non-Mock", NonMockCount);
            return Ok(QuizCount);
        }
    }
}
