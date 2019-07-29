using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Repository
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
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

    public class SubjectTag
    {
        public int SubjectId { get; set; }
        public string Name { get; set; }
    }

    public class QuestionSpecs
    {
        public string Difficulty { get; set; }
        public string QuestionType { get; set; }
        public SubjectTag[] Tags { get; set; }
    }

    public class UsersQuizScheduled
    {
        public int UserScheduleId { get; set; }
        public int QuizScheduleId { get; set; }
        public int QuizId { get; set; }
        public string QuizName { get; set; }
        public string QuizTime { get; set; }
        public int TotalQuestions { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
    }

    public class TestQuestion
    {
        public int QuestionId { get; set; }
        public string QuestionStatement { get; set; }
        public string[] Option { get; set; }
        public string ImageName { get; set; }
        public decimal Marks { get; set; }
        public string QuestionType { get; set; }
        public string Difficulty { get; set; }
        public SubjectTag[] Tags { get; set; }
        public string CreatedBy { get; set; }
        public int MarkedAnswer { get; set; }
        public string ResponseTime { get; set; }
    }

}