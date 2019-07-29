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
    public interface IQuizBuffer
    {
        Task<QuizBuffer> GetQuizBuffer(string UserId, int QuizId, int Index);
        Task<IEnumerable<QuizBuffer>> GetQuizBufferUsersQuiz(int QuizId, string UserId);
        Task<int> CreateQuizBuffer(IEnumerable qIds, int QuizId, string UserId);
        Task<int> UpdateQuizBuffer(QuizBuffer quizBuffer);
        Task<int> DeleteQuizBuffer(IEnumerable<QuizBuffer> quizBuffer);
    }
}
