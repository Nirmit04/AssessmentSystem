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
    public interface IQuestion
    {
        Task<IEnumerable> GetAllQuestions();
        Task<int> GetAllQuestionsCount();
        Task<Question> GetQuestionById(int QuestionId);
        Task<int> GetQuestionsByUsersCount(string UserId);
        Task<IEnumerable> GetQuestionsByUsers(string UserId);
        Task<IEnumerable<Question>> GetAllQuestionsByIds(IEnumerable<int> qIds);
        Task<int> CreateQuestion(Question question);
        Task<int> UpdateQuestion(int QuestionId, Question question);
        Task<Question> DeleteQuestion(int QuestionId);
        Task<string> DeleteQuestionImage(int QuestionId);
        Task<IEnumerable> GetQuestionsByDifficultyType(List<int> qIds, string difficulty, string questionType);
        Task<IEnumerable<Question>> GetRandomQuestions(List<int> questionIdsOfSubject, string Difficulty, string QuestionType, int TotalQuestion);
        Task<bool> QuestionExists(int id);
    }
}
