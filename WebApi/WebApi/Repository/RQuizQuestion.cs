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
    public class RQuizQuestion : IQuizQuestion
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private IQuestion rQuestion = new RQuestion();
        private IQuiz rQuiz = new RQuiz();

        public async Task<IEnumerable<int>> GetQuizQuestionIds(int QuizId)
        {
            var qIds = await db.QuizQuestions
                .Where(x => x.QuizId == QuizId)
                .Select(x => x.QuestionId)
                .ToListAsync();
            return qIds;
        }

        public async Task<int> AddQuizQuestions(Quiz quiz, int[] QuestionIds)
        {
            QuizQuestion quizQuestion;
            Question question;
            foreach (var item in QuestionIds)
            {
                quizQuestion = new QuizQuestion()
                {
                    QuizId = quiz.QuizId,
                    QuestionId = item
                };
                db.QuizQuestions.Add(quizQuestion);
                question = await rQuestion.GetQuestionById(item);
                quiz.TotalQuestions++;
                quiz.TotalMarks += question.Marks;
            }
            return await db.SaveChangesAsync();
        }

        public async Task<int> DeleteQuizQuestion(int QuestionId, int QuizId)
        {
            var quizQuestion = await db.QuizQuestions.FirstOrDefaultAsync(x => x.QuestionId == QuestionId && x.QuizId == QuizId);
            db.QuizQuestions.Remove(quizQuestion);
            var question = await rQuestion.GetQuestionById(QuestionId);
            var quiz = await rQuiz.GetQuizById(QuizId);
            quiz.TotalMarks = quiz.TotalMarks - question.Marks;
            quiz.TotalQuestions--;
            return await db.SaveChangesAsync();
        }

    }
}