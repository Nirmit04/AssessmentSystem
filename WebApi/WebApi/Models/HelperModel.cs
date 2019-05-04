using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class SubmitQuiz
    {
        public int QuizId { get; set; }
        public int QuizScheduleId { get; set; }
        public string UserId { get; set; }
        public string TotalResponseTime { get; set; }
    }

    public class MockQuizSubmitDetails
    {
        public int QuestionId { get; set; }
        public string QuestionStatement { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
        public string Option4 { get; set; }
        public string ResponseTime { get; set; }
        public string ImageName { get; set; }
        public int CorrectAnswer { get; set; }
        public int MarkedAnswer { get; set; }
    }

    public class GetQuestionBuffer
    {
        public int Index { get; set; }
        public string State { get; set; }
        public string ResponseTime { get; set; }
    }

    public class ResumeQuizBuffer
    {
        public ICollection<GetQuestionBuffer> GetQuestionBuffers { get; set; }
        public string TimeLeft { get; set; }
    }
}