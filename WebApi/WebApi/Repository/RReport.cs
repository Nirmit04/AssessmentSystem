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
    public class RReport : IReport
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public async Task<int> CreateReport(Report report)
        {
            db.Reports.Add(report);
            return await db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Report>> GetQuizReportByUser(string UserId)
        {
            var reportList = await db.Reports.Where(x => x.UserId == UserId).ToListAsync();
            return reportList;
        }

        public async Task<IEnumerable<Report>> GetQuizReportByQuiz(int QuizId)
        {
            var reportList = await db.Reports.Where(x => x.QuizId == QuizId).ToListAsync();
            return reportList;
        }

        public async Task<IEnumerable<Report>> GetQuizReportByQuizIds(IEnumerable<int> quizIds)
        {
            var reportList = await db.Reports.Where(x => quizIds.Contains(x.QuizId)).ToListAsync();
            return reportList;
        }

        public async Task<int> GetQuizReportByQuizTypeCount(string UserId, string QuizType)
        {
            var reportsCount = await db.Reports
                .Where(x => x.UserId == UserId && x.QuizType == QuizType)
                .CountAsync();

            return reportsCount;
        }

        public async Task<IEnumerable> GetQuizReportByQuizType(string UserId, string QuizType)
        {
            var reports = await db.Reports
                .Where(x => x.UserId == UserId && x.QuizType == QuizType)
                .OrderByDescending(z => z.ReportId)
                .ToListAsync();

            var reportList = reports
                .AsEnumerable()
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
                });
            return reportList;    
        }
    }
}