using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface IReport
    {
        Task<int> CreateReport(Report report);
        Task<IEnumerable<Report>> GetQuizReportByUser(string UserId);
        Task<IEnumerable<Report>> GetQuizReportByQuiz(int QuizId);
        Task<IEnumerable<Report>> GetQuizReportByQuizIds(IEnumerable<int> quizIds);
        Task<int> GetQuizReportByQuizTypeCount(string UserId, string QuizType);
        Task<IEnumerable> GetQuizReportByQuizType(string UserId, string QuizType);
    }
}
