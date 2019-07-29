using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class SubjectAnalytics
    {
        public SubjectAnalytics()
        {
            QuizProperties = new QuizProperty();
        }
        public string SubjectName { get; set; }
        public int SubjectId { get; set; }
        public QuizProperty QuizProperties { get; set; }
    }

    public class QuizProperty
    {
        public decimal HighestScore { get; set; }
        public decimal LowestScore { get; set; }
        public int NoOfQuiz { get; set; }
        public decimal Accuracy { get; set; }
        public decimal AverageMarks { get; set; }
    }
}