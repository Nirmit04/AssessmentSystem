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
    public class RUserSchedule : IUserSchedule
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public async Task<UserSchedule> GetUserSchedule(int QuizScheduleId, string UserId, int QuizId)
        {
            var userSchedule = await db.UserSchedules.FirstOrDefaultAsync(x => x.QuizScheduleId == QuizScheduleId && x.UserId == UserId && x.QuizId == QuizId);
            return userSchedule;
        }

        public async Task<IEnumerable<string>> GetUserScheduleUserIdsByQuizId(int QuizId)
        {
            var userIds = await db.UserSchedules
                .Where(x => x.QuizId == QuizId)
                .Select(y => y.UserId)
                .ToListAsync();
            return userIds;
        }

        public async Task<IEnumerable<string>> GetUserScheduleUserIdsByQuizScheduleId(int QuizScheduleId)
        {
            var userIds = await db.UserSchedules
                .Where(x => x.QuizId == QuizScheduleId)
                .Select(y => y.UserId)
                .ToListAsync();
            return userIds;
        }

        public async Task<int> CreateUserSchedule(UserSchedule userSchedule)
        {
            db.UserSchedules.Add(userSchedule);
            return await db.SaveChangesAsync();
        }

        public async Task<int> UpdateUserScheduleTakenStatus(UserSchedule userSchedule)
        {
            userSchedule.Taken = true;
            return await db.SaveChangesAsync();
        }

        public async Task<int> DelteUserSchedule(UserSchedule userSchedule)
        {
            db.UserSchedules.Remove(userSchedule);
            return await db.SaveChangesAsync();
        }
        
        public async Task<UserSchedule> ValidateUserSchedule(int QuizId, string UserId, bool Taken)
        {
            var userSchedule = await db.UserSchedules.FirstOrDefaultAsync(x => x.QuizId == QuizId && x.UserId == UserId && x.Taken == Taken);
            return userSchedule;
        }
    }
}