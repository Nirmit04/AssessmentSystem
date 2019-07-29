using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Repository;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface IEmployee
    {
        Task<IEnumerable<UsersQuizScheduled>> GetUserSchedules(string UserId);
        Task<int> UpdateExpiredSchedules(int UserScheduleId, int QuizScheduleId);
        Task<int> GetQuizTypeCount(string UserId, string QuizType);
        Task<decimal> GetAccuracySum(string UserId);
        Task<string> RecentQuizTakenName(string UserId);
    }
}
