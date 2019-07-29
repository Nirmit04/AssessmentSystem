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
    public interface IQuiz
    {
        Task<IEnumerable<Quiz>> GetAllQuizzes();
        Task<IEnumerable<Quiz>> GetAllQuizzesByUsers(string UserId);
        Task<IEnumerable> GetAllUnArchivedQuizzes();
        Task<Quiz> GetQuizById(int QuizId);
        Task<IEnumerable> GetQuizzesByUserStatus(string UserId, bool ArchiveStatus);
        Task<IEnumerable> GetQuizzesByType(string QuizType, bool ArchiveStatus);
        Task<int> CreateQuiz(Quiz quiz);
        Task<int> CreateRandomQuiz(Quiz quiz, List<int> randomQIds);
        Task<Quiz> InvertQuizArchiveStatus(int QuizId);
    }
}
