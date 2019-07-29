using System;
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
    public class RQuizTag : IQuizTag
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public async Task<IEnumerable<int>> GetQuizTagsByQuiz(int QuizId)
        {
            var subjectIds = await db.QuizTags
                .Where(x => x.QuizId == QuizId)
                .Select(z => z.SubjectId)
                .ToListAsync();
            return subjectIds;
        }

        public async Task<IEnumerable<int>> GetQuizTagsBySubject(int SubjectId)
        {
            var quizIds = await db.QuizTags
                .Where(x => x.SubjectId == SubjectId)
                .Select(z => z.QuizId)
                .ToListAsync();
            return quizIds;
        }
    }
}