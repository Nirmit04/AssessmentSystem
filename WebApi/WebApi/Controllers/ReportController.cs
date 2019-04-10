﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ReportController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        [Route("api/Report/Scheduled/{UserId}")]
        public IHttpActionResult GetScheduledReport(string UserId)
        {
            var report = db.Reports.Where(x => x.UserId == UserId && x.QuizType== "Scheduled")
                .Select(x => new
                {
                    x.ReportId,
                    x.Accuracy,
                    x.CorrectAnswers,
                    x.QuizId,
                    x.TimeTaken,
                    x.MarksScored,
                    x.UnattemptedAnswers,
                    x.WrongAnswers,
                    x.UserId,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).TotalMarks
                })
                .OrderByDescending(z => z.ReportId)
                .ToList();
            return Ok(report);
        }


        [HttpGet]
        [Route("api/Report/Mock/{UserId}")]
        public IHttpActionResult GetMockReport(string UserId)
        {
            var report = db.Reports.Where(x => x.UserId == UserId && x.QuizType == "Mock")
                .Select(x => new
                {
                    x.ReportId,
                    x.Accuracy,
                    x.CorrectAnswers,
                    x.QuizId,
                    x.TimeTaken,
                    x.MarksScored,
                    x.UnattemptedAnswers,
                    x.WrongAnswers,
                    x.UserId,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).TotalMarks
                })
                .OrderByDescending(z => z.ReportId)
                .ToList();
            return Ok(report);
        }
    }
}
