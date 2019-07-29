using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Repository
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class RQuiz : IQuiz
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();

        public async Task<IEnumerable<Quiz>> GetAllQuizzes()
        {
            var quizzes = await db.Quizs.ToListAsync();
            return quizzes;
        }

        public async Task<IEnumerable<Quiz>> GetAllQuizzesByUsers(string UserId)
        {
            var quizzes = await db.Quizs.Where(x => x.CreatedBy == UserId).ToListAsync();
            return quizzes;
        }

        public async Task<IEnumerable> GetAllUnArchivedQuizzes()
        {
            var quizzes = await db.Quizs
               .Where(x => x.ArchiveStatus == false)
               .OrderByDescending(z => z.QuizId)
               .ToListAsync();
            var quizList = helper.QuizFields(quizzes);
            return quizList;
        }

        public async Task<Quiz> GetQuizById(int QuizId)
        {
            Quiz quiz = await db.Quizs.FindAsync(QuizId);
            return quiz;
        }

        public async Task<IEnumerable> GetQuizzesByUserStatus(string UserId, bool ArchiveStatus)
        {
            var quizzes = await db.Quizs
                .Where(x => x.CreatedBy == UserId && x.ArchiveStatus == ArchiveStatus)
                .OrderByDescending(z => z.QuizId)
                .ToListAsync();
            var quizList = helper.QuizFields(quizzes);
            return quizList;               
        }

        public async Task<IEnumerable> GetQuizzesByType(string QuizType, bool ArchiveStatus)
        {
            var quizzes = await db.Quizs
                .Where(x => x.QuizType == QuizType && x.ArchiveStatus == ArchiveStatus)
                .OrderByDescending(z => z.QuizId)
                .ToListAsync();
            var quizList = helper.QuizFields(quizzes);
            return quizList;
        }

        public async Task<int> CreateQuiz(Quiz quiz)
        {
            Question ques = new Question();
            quiz.TotalMarks = 0;
            quiz.TotalQuestions = quiz.QuestionIds.Length;
            foreach (var item in quiz.QuestionIds)
            {
                ques = await db.Questions.FindAsync(item);
                quiz.TotalMarks += ques.Marks;
            }
            quiz.ArchiveStatus = false;
            db.Quizs.Add(quiz);

            foreach (var item in quiz.QuestionIds)
            {
                db.QuizQuestions.Add(new QuizQuestion()
                {
                    QuizId = quiz.QuizId,
                    QuestionId = item
                });
                await db.SaveChangesAsync();
            }
            foreach (var item in quiz.Tags)
            {
                db.QuizTags.Add(new QuizTag()
                {
                    QuizId = quiz.QuizId,
                    SubjectId = item.SubjectId
                });
                await db.SaveChangesAsync();
            }
            return await db.SaveChangesAsync();
        }

        public async Task<int> CreateRandomQuiz(Quiz quiz, List<int> randomQIds)
        {
            db.Quizs.Add(quiz);
            foreach (var item in randomQIds)
            {
                db.QuizQuestions.Add(new QuizQuestion() 
                {
                    QuizId = quiz.QuizId,
                    QuestionId = item
                });
            }
            foreach (var item in quiz.Tags)
            {
                db.QuizTags.Add(new QuizTag()
                {
                    QuizId = quiz.QuizId,
                    SubjectId = item.SubjectId
                });
            }
            return await db.SaveChangesAsync();
        }

        public async Task<Quiz> InvertQuizArchiveStatus(int QuizId)
        {
            Quiz quiz = await db.Quizs.FindAsync(QuizId);
            if (quiz != null)
            {
                quiz.ArchiveStatus = !quiz.ArchiveStatus;
                await db.SaveChangesAsync();
            }
            return quiz;
        }

    }
}