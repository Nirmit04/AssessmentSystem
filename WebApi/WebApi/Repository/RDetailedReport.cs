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
    public class RDetailedReport : IDetailedReport
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public async Task<IEnumerable> GetMockReport(string UserId, int QuizId)
        {
            var detailedReport = await db.DetailedReports
                .Where(x => x.QuizId == QuizId && x.UserId == UserId)
                .Select(y => new
                {
                    y.DetailedReportId,
                    y.QuizId,
                    db.Quizs.FirstOrDefault(z => z.QuizId == y.QuizId).QuizName,
                    y.UserId,
                    y.QuestionId,
                    y.AttemptedAnswer,
                    y.CorrectAnswer,
                    db.Questions.FirstOrDefault(z => z.QuestionId == y.QuestionId).QuestionStatement,
                    Option = new List<string>()
                    {
                        db.Questions.FirstOrDefault(z=>z.QuestionId == y.QuestionId).Option1,
                        db.Questions.FirstOrDefault(z=>z.QuestionId == y.QuestionId).Option2,
                        db.Questions.FirstOrDefault(z=>z.QuestionId == y.QuestionId).Option3,
                        db.Questions.FirstOrDefault(z=>z.QuestionId == y.QuestionId).Option4
                    }
                }).ToListAsync();
            return detailedReport;
        }

        public async Task<int> CreateDetailedReport(DetailedReport detailedReport)
        {
            db.DetailedReports.Add(detailedReport);
            return await db.SaveChangesAsync();
        }
    }
}