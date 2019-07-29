using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface IUserSchedule
    {
        Task<UserSchedule> GetUserSchedule(int QuizScheduleId, string UserId, int QuizId);
        Task<IEnumerable<string>> GetUserScheduleUserIdsByQuizId(int QuizId);
        Task<IEnumerable<string>> GetUserScheduleUserIdsByQuizScheduleId(int QuizScheduleId);
        Task<int> CreateUserSchedule(UserSchedule userSchedule);
        Task<int> UpdateUserScheduleTakenStatus(UserSchedule userSchedule);
        Task<int> DelteUserSchedule(UserSchedule userSchedule);
        Task<UserSchedule> ValidateUserSchedule(int QuizId, string UserId, bool Taken);
    }
}
