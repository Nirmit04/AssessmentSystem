using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class SubjectAnalytics
    {
       public string SubjectName { get; set; }
       public int SubjectId { get; set; }
       public Property Properties { get; set; }
    }
    public class Property
    {
        public decimal HighestScore { get; set; }
        public decimal LowestScore { get; set; }
        public int NoQuiz { get; set; }
        public decimal Accuracy { get; set; }
        public decimal Average { get; set; }
    }
}