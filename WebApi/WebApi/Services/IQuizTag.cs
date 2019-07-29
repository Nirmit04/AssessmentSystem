using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface IQuizTag
    {
        Task<IEnumerable<int>> GetQuizTagsByQuiz(int QuizId);
        Task<IEnumerable<int>> GetQuizTagsBySubject(int SubjectId); 
    }
}
