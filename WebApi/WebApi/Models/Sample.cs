using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Sample
    {
        public string CreatedBy { get; set; }
        public string QuestionStatement { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
        public string Option4 { get; set; }
        public int Answer { get; set; }
        public decimal Marks { get; set; }
        public int SubjectId { get; set; }
        public string Difficulty { get; set; }
    }
}