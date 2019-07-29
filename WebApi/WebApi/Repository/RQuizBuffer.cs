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
    public class RQuizBuffer : IQuizBuffer
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public async Task<QuizBuffer> GetQuizBuffer(string UserId, int QuizId, int Index)
        {
            var quizBuffer = await db.QuizBuffers
                .FirstOrDefaultAsync(x => x.Index == Index && x.QuizId == QuizId && x.UserId == UserId);
            return quizBuffer;
        }

        public async Task<IEnumerable<QuizBuffer>> GetQuizBufferUsersQuiz(int QuizId, string UserId)
        {
            var quizBuffer = await db.QuizBuffers
                .Where(x => x.QuizId == QuizId && x.UserId == UserId)
                .ToListAsync();
            return quizBuffer;
        }

        public async Task<int> CreateQuizBuffer(IEnumerable qIds, int QuizId, string UserId)
        {
            int index = 1;
            QuizBuffer quizBuffer = new QuizBuffer
            {
                QuizId = QuizId,
                UserId = UserId
            };
            foreach (int qId in qIds)
            {
                quizBuffer.Index = index;
                quizBuffer.QuestionId = qId;
                index++;
                db.QuizBuffers.Add(quizBuffer);
                await db.SaveChangesAsync();
            }
            return await db.SaveChangesAsync();
        }

        public async Task<int> UpdateQuizBuffer(QuizBuffer quizBuffer)
        {
            db.Entry(quizBuffer).State = EntityState.Modified;
            return await db.SaveChangesAsync();
        }

        public async Task<int> DeleteQuizBuffer(IEnumerable<QuizBuffer> quizBuffer)
        {
            db.QuizBuffers.RemoveRange(quizBuffer);
            return await db.SaveChangesAsync();
        }
    }
}