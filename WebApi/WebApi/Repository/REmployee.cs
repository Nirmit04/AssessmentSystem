using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Repository
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class REmployee : IEmployee
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public async Task<IEnumerable<UsersQuizScheduled>> GetUserSchedules(string UserId)
        {
            var quizzesScheduled = await db.UserSchedules
                .Where(x => x.UserId == UserId && x.Taken == false)
                .Select(x => new UsersQuizScheduled()
                {
                    UserScheduleId = x.UserScheduleId,
                    QuizScheduleId = x.QuizScheduleId,
                    QuizId = x.QuizId,
                    QuizName = db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId && y.QuizType == "Scheduled").QuizName,
                    QuizTime = db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId && y.QuizType == "Scheduled").QuizTime,
                    TotalQuestions = db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId && y.QuizType == "Scheduled").TotalQuestions,
                    StartDateTime = db.QuizSchedules.FirstOrDefault(y => y.QuizScheduleId == x.QuizScheduleId).StartDateTime,
                    EndDateTime = db.QuizSchedules.FirstOrDefault(y => y.QuizScheduleId == x.QuizScheduleId).EndDateTime
                }).ToListAsync();
            return quizzesScheduled;
        }

        public async Task<int> UpdateExpiredSchedules(int UserScheduleId, int QuizScheduleId)
        {
            var userSchedule = await db.UserSchedules.FirstOrDefaultAsync(x => x.UserScheduleId == UserScheduleId);
            var quizSchedule = await db.QuizSchedules.FirstOrDefaultAsync(x => x.QuizScheduleId == QuizScheduleId);
            userSchedule.Taken = true;
            quizSchedule.ArchiveStatus = true;
            return await db.SaveChangesAsync();
        }

        public async Task<int> GetQuizTypeCount(string UserId, string QuizType)
        {
            var count = await db.Reports.Where(x => x.UserId == UserId && x.QuizType == QuizType).CountAsync();
            return count;
        }

        public async Task<decimal> GetAccuracySum(string UserId)
        {
            var accuracySum = await db.Reports.Where(x => x.UserId == UserId).Select(y => y.Accuracy).SumAsync();
            return accuracySum;
        }

        public async Task<string> RecentQuizTakenName(string UserId)
        {
            var userSchedule = await db.UserSchedules.OrderByDescending(x => x.UserScheduleId).FirstOrDefaultAsync(x => x.UserId == UserId && x.Taken == true);
            var quizId = userSchedule.QuizId;
            var quiz = await db.Quizs.FirstOrDefaultAsync(x => x.QuizId == quizId);
            return quiz.QuizName;
        }     
    }
}