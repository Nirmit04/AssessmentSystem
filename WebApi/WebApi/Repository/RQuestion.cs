using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Repository
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class RQuestion : IQuestion
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();

        public async Task<IEnumerable> GetAllQuestions()
        {
            var questions = await db.Questions
                .OrderByDescending(y => y.QuestionId)
                .ToListAsync();

            var questionList = helper.QuestionFields(questions);
            return questionList;
        }

        public async Task<int> GetAllQuestionsCount()
        {
            var questionCount = await db.Questions.CountAsync();
            return questionCount;
        }

        public async Task<Question> GetQuestionById(int QuestionId)
        {
            var question = await db.Questions.FindAsync(QuestionId);
            return question;
        }

        public async Task<int> GetQuestionsByUsersCount(string UserId)
        {
            var questionsCount = await db.Questions
                .Where(z => z.CreatedBy == UserId)
                .CountAsync();
            return questionsCount;
        }

        public async Task<IEnumerable> GetQuestionsByUsers(string UserId)
        {
            var questions = await db.Questions
                .Where(z => z.CreatedBy == UserId)
                .OrderByDescending(y => y.QuestionId)
                .ToListAsync();
            var questionList = helper.QuestionFields(questions);
            return questionList;
        }

        public async Task<IEnumerable<Question>> GetAllQuestionsByIds(IEnumerable<int> qIds)
        {
            var questions = await db.Questions
                .Where(y => qIds.Contains(y.QuestionId))
                .ToListAsync();
            return questions;
        }

        public async Task<int> CreateQuestion(Question question)
        {
            db.Questions.Add(question);
            QuestionTag questionTag;
            foreach (var item in question.Tags)
            {
                questionTag = new QuestionTag()
                {
                    QuestionId = question.QuestionId,
                    SubjectId = item.SubjectId
                };
                db.QuestionTags.Add(questionTag);
                await db.SaveChangesAsync();
            }
            return await db.SaveChangesAsync();
        }

        public async Task<int> UpdateQuestion(int QuestionId, Question question)
        {
            db.Entry(question).State = EntityState.Modified;
            var qIds = await db.QuestionTags.Where(x => x.QuestionId == question.QuestionId).ToListAsync();
            db.QuestionTags.RemoveRange(qIds);
            QuestionTag questionTag;
            foreach (var item in question.Tags)
            {
                questionTag = new QuestionTag()
                {
                    QuestionId = question.QuestionId,
                    SubjectId = item.SubjectId
                };
                db.QuestionTags.Add(questionTag);
                await db.SaveChangesAsync();
            }
            return await db.SaveChangesAsync();
        }

        public async Task<Question> DeleteQuestion(int QuestionId)
        {
            Question question = await db.Questions.FindAsync(QuestionId);
            if (question != null)
            {
                db.Questions.Remove(question);
                await db.SaveChangesAsync();
            }
            return question;
        }

        public async Task<string> DeleteQuestionImage(int QuestionId)
        {
            Question question = await db.Questions.FindAsync(QuestionId);
            string imageName = null;
            if (question != null)
            {
                imageName = question.ImageName;
                question.ImageName = null;
                await db.SaveChangesAsync();
            }
            return imageName;
        }

        public async Task<IEnumerable> GetQuestionsByDifficultyType(List<int> qIds, string difficulty, string questionType)
        {
            var questions = await db.Questions
                .Where(z => qIds.Contains(z.QuestionId) && z.Difficulty == difficulty && z.QuestionType == questionType)
                .OrderByDescending(y => y.QuestionId)
                .ToListAsync();

            var questionList = helper.QuestionFields(questions);
            return questionList;
        }

        public async Task<IEnumerable<Question>> GetRandomQuestions(List<int> questionIdsOfSubject, string Difficulty, string QuestionType, int TotalQuestion)
        {
            var questions = await db.Questions
                .Where(z => questionIdsOfSubject.Contains(z.QuestionId) && z.Difficulty == Difficulty && z.QuestionType == QuestionType)
                .ToListAsync();

            var randomQuestionLists = questions
                .OrderBy(y => Guid.NewGuid())
                .Take(TotalQuestion);
            return randomQuestionLists;
        }

        #region Helpers
        public async Task<bool> QuestionExists(int id)
        {
            return await db.Questions.CountAsync(x => x.QuestionId == id) > 0;
        }
        #endregion
    }
}