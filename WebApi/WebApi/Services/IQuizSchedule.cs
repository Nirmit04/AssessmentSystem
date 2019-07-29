using System;
using System.Collections;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface IQuizSchedule
    {
        Task<QuizSchedule> GetQuizScheduleById(int QuizScheduleId);
        Task<IEnumerable> GetQuizScheduleByUsersStatus(string UserId, bool ArchiveStatus);
        Task<int> CreateQuizSchedule(QuizSchedule quizSchedule);
        Task<int> UpdateQuizSchedule(QuizSchedule quizSchedule);
        Task<QuizSchedule> DeleteQuizSchedule(int QuizScheduleId);
        Task<int> UnarchiveQuizSchedule(QuizSchedule quizSchedule);
        Task<int> GetQuizScheduleCountByUsers(string UserId);
        Task<int> InValidateSchedule(QuizSchedule quizSchedule, UserSchedule userSchedule);
    }
}
