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
    public class RQuizSchedule : IQuizSchedule
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public async Task<QuizSchedule> GetQuizScheduleById(int QuizScheduleId)
        {
            var quizSchedule = await db.QuizSchedules.FindAsync(QuizScheduleId);
            return quizSchedule;
        }

        public async Task<IEnumerable> GetQuizScheduleByUsersStatus(string UserId, bool ArchiveStatus)
        {
            var quizScheduleList = await db.QuizSchedules
                .Where(x => x.CreatedBy == UserId && x.ArchiveStatus == ArchiveStatus)
                .OrderByDescending(z => z.QuizScheduleId)
                .ToListAsync();
            
            var quizSchedules = quizScheduleList
                .Select(x => new
                {
                    x.QuizScheduleId,
                    x.StartDateTime,
                    x.EndDateTime,
                    x.QuizId,
                    db.Quizs.FirstOrDefault(y => y.QuizId == x.QuizId).QuizName,
                    x.ArchiveStatus,
                });
            return quizSchedules;
        }

        public async Task<int> CreateQuizSchedule(QuizSchedule quizSchedule)
        {
            quizSchedule.StartDateTime = quizSchedule.StartDateTime.ToUniversalTime();
            quizSchedule.EndDateTime = quizSchedule.EndDateTime.ToUniversalTime();
            db.QuizSchedules.Add(quizSchedule);
            return await db.SaveChangesAsync();
        }

        public async Task<int> UpdateQuizSchedule(QuizSchedule quizSchedule)
        {
            quizSchedule.StartDateTime = quizSchedule.StartDateTime.ToUniversalTime();
            quizSchedule.EndDateTime = quizSchedule.EndDateTime.ToUniversalTime();
            db.Entry(quizSchedule).State = EntityState.Modified;
            return await db.SaveChangesAsync();
        }

        public async Task<QuizSchedule> DeleteQuizSchedule(int QuizScheduleId)
        {
            QuizSchedule quizSchedule = await db.QuizSchedules.FindAsync(QuizScheduleId);
            var userScheduleTrue = await db.UserSchedules.Where(x => x.QuizScheduleId == QuizScheduleId).AllAsync(z => z.Taken == true);
            var userScheduleFalse = await db.UserSchedules.Where(x => x.QuizScheduleId == QuizScheduleId).AllAsync(z => z.Taken == false);
            if (userScheduleTrue == true && userScheduleFalse == true)
            {
                quizSchedule.ArchiveStatus = true;
                await db.SaveChangesAsync();
                return quizSchedule;
            }
            else
            {
                return null;
            }
        }

        public async Task<int> UnarchiveQuizSchedule(QuizSchedule quizSchedule)
        {
            quizSchedule.ArchiveStatus = false;
            return await db.SaveChangesAsync();
        }

        public async Task<int> GetQuizScheduleCountByUsers(string UserId)
        {
            var quizScheduleCount = await db.QuizSchedules.Where(x => x.CreatedBy == UserId).CountAsync();
            return quizScheduleCount;
        }

        public async Task<int> InValidateSchedule(QuizSchedule quizSchedule, UserSchedule userSchedule)
        {
            quizSchedule.ArchiveStatus = true;
            userSchedule.Taken = true;
            return await db.SaveChangesAsync();
        }
    }
}