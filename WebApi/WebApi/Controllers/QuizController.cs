﻿using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class QuizController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        [HttpPost]
        [Route("api/Quiz/CreateQuiz")]
        public IHttpActionResult CreateQuiz(Quiz quiz)
        {
            Question ques = new Question();
            quiz.TotalMarks = 0;
            quiz.TotalQuestions = quiz.QuestionIds.Length;
            foreach (var item in quiz.QuestionIds)
            {
                ques = db.Questions.Find(item);
                quiz.TotalMarks += ques.Marks;
            }
            quiz.ArchiveStatus = false;
            db.Quizs.Add(quiz);

            QuizQuestion quizQuestion = new QuizQuestion();

            foreach (var item in quiz.QuestionIds)
            {
                quizQuestion.QuizId = quiz.QuizId;
                quizQuestion.QuestionId = item;
                db.QuizQuestions.Add(quizQuestion);
                db.SaveChanges();
            }
            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [Route("api/Quiz/GetQuiz/{CreatedBy}")]
        public IHttpActionResult GetQuiz(string CreatedBy)
        {
            var quiz = db.Quizs.Where(x => x.CreatedBy == CreatedBy && x.ArchiveStatus == false)
                .Select(x => new
                {
                    QuizId = x.QuizId,
                    QuizName = x.QuizName,
                    Difficulty = x.Difficulty,
                    TotalQuestions = x.TotalQuestions,
                    TotalMarks = x.TotalMarks,
                    ArchiveStatus = x.ArchiveStatus,
                    QuizType = x.QuizType,
                    Subject = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name
                }).ToList();
            return Ok(quiz);
        }

        [HttpDelete]
        [Route("api/Quiz/Delete/{QuizId}")]
        public IHttpActionResult Archive(int QuizId)
        {
            Quiz quiz = db.Quizs.Find(QuizId);
            quiz.ArchiveStatus = true;
            db.SaveChanges();
            return Ok();
        }

        [HttpPut]
        [Route("api/Quiz/Unarchive")]
        public IHttpActionResult UnArchive([FromBody]int QuizId)
        {
            Quiz quiz = db.Quizs.Find(QuizId);
            quiz.ArchiveStatus = false;
            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [Route("api/Quiz/QuizQuestion/{QuizId}")]
        public IHttpActionResult GetQuiz(int QuizId)
        {
            var qIds = db.QuizQuestions
                .Where(x => x.QuizId == QuizId)
                .Select(x => x.QuestionId)
                .ToList();

            List<int> questionIds = new List<int>();
            foreach (int qId in qIds)
            {
                questionIds.Add(qId);
            }
            var questions = db.Questions
                .AsEnumerable()
                .Where(y => questionIds.Contains(y.QuestionId))
                .Select(x => new
                     {
                         x.QuestionId,
                         x.QuestionStatement,
                         x.Marks,
                         x.Difficulty,
                         x.CreatedBy
                     }).ToList(); 
            return Ok(questions);
        }

        [HttpDelete]
        [AllowAnonymous] //To be removed later
        [Route("api/Quiz/QuizQuestion/Delete/{QuizId}/{QuestionId}")]
        public IHttpActionResult DeleteQuestion(int QuestionId,int QuizId)
        {
            var quizquestion = db.QuizQuestions.FirstOrDefault(x => x.QuestionId == QuestionId && x.QuizId == QuizId);
            db.QuizQuestions.Remove(quizquestion);
            var question = db.Questions.FirstOrDefault(x => x.QuestionId == QuestionId);
            var quiz = db.Quizs.FirstOrDefault(x => x.QuizId == QuizId);
            quiz.TotalMarks = quiz.TotalMarks - question.Marks;
            quiz.TotalQuestions--;
            db.SaveChanges();
            return Ok();
        }

        [HttpGet]
        [Route("api/Quiz/GetQuestionsNotInQuiz/{QuizId}")]
        public IHttpActionResult GetQuestionsNotInQuiz(int QuizId)
        {
            var qIds = db.QuizQuestions.AsEnumerable()
                .Where(x => x.QuizId == QuizId)
                .Select(z => z.QuestionId).ToList();
            var quiz = db.Quizs.Single(x => x.QuizId == QuizId);
            var questionsList = db.Questions
                .Where(x => x.Difficulty == quiz.Difficulty && x.SubjectId == quiz.SubjectId && !qIds.Contains(x.QuestionId))
                .Select(z => new
                {
                    QuestionId = z.QuestionId,
                    QuestionStatement = z.QuestionStatement,
                    Option1 = z.Option1,
                    Option2 = z.Option2,
                    Option3 = z.Option3,
                    Option4 = z.Option4,
                    Answer = z.Answer,
                    Marks = z.Marks,
                    SubjectId = z.SubjectId,
                    SubjectName = db.Subjects.Where(y => y.SubjectId == z.SubjectId).FirstOrDefault().Name,
                    Difficulty = z.Difficulty,
                    ImageName = z.ImageName
                }).ToList();
            return Ok(questionsList);
        }

        [HttpGet]
        [Route("api/Quiz/Archived/{CreatedBy}")]
        public IHttpActionResult ArchviedQuiz(string CreatedBy)
        {

            var quiz = db.Quizs.Where(x => x.CreatedBy == CreatedBy).Where(x => x.ArchiveStatus == true).
                Select(x => new
                {
                    QuizId = x.QuizId,
                    QuizName = x.QuizName,
                    Difficulty = x.Difficulty,
                    TotalQuestions = x.TotalQuestions,
                    TotalMarks = x.TotalMarks,
                    ArchiveStatus = x.ArchiveStatus,
                    QuizType = x.QuizType,
                    Subject = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name
                }).ToList();
            return Ok(quiz);
        }


        [HttpGet]
        [Route("api/Quiz/GetAllQuiz")]
        public IHttpActionResult GetAllQuiz()
        {
            var quiz = db.Quizs.Where(x => x.ArchiveStatus == false).
                Select(x => new
                {
                    QuizId = x.QuizId,
                    QuizName = x.QuizName,
                    Difficulty = x.Difficulty,
                    TotalQuestions = x.TotalQuestions,
                    TotalMarks = x.TotalMarks,
                    ArchiveStatus = x.ArchiveStatus,
                    QuizType = x.QuizType,
                    Subject = db.Subjects.Where(y => y.SubjectId == x.SubjectId).FirstOrDefault().Name
                }).ToList();
            return Ok(quiz);
        }

        [HttpPut]
        [Route("api/Quiz/EditQuiz/AddQuestion/{QuizId}")]
        public IHttpActionResult AddQuestions(int QuizId,[FromBody]int[] QuestionId)
        {
            QuizQuestion quizQuestion = new QuizQuestion();
            Quiz quiz = new Quiz();
            Question question = new Question();
            foreach (var item in QuestionId)
            {
                quizQuestion.QuizId = QuizId;
                quizQuestion.QuestionId = item;
                db.QuizQuestions.Add(quizQuestion);
                quiz = db.Quizs.FirstOrDefault(x=>x.QuizId==QuizId);
                question = db.Questions.FirstOrDefault(x=>x.QuestionId==item);

                quiz.TotalQuestions++;
                quiz.TotalMarks += question.Marks;
                db.SaveChanges();
            }
            return Ok();
        }


        /**
         * This method is used to find the list of mock quiz 
         * @Params- none
         * @Returns -List of all mock quizzes.
         * **/
        [HttpGet]
        [Route("api/Quiz/MockQuiz")]
        public IHttpActionResult GetAllMockQuiz()
        {
            var Mock = db.Quizs.Where(x => x.QuizType == "Mock").Select(x=>new
            {
                x.QuizName,
                x.Difficulty,
                Subject=db.Subjects.FirstOrDefault(y=>y.SubjectId==x.SubjectId).Name,
                x.TotalMarks,
                x.TotalQuestions
            }).ToList();
            return Ok(Mock);
        }
    }
}