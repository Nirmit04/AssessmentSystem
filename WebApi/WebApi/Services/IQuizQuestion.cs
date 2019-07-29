using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface IQuizQuestion
    {
        Task<IEnumerable<int>> GetQuizQuestionIds(int QuizId);
        Task<int> AddQuizQuestions(Quiz quiz, int[] QuestionIds);
        Task<int> DeleteQuizQuestion(int QuestionId, int QuizId);    
    }
}
