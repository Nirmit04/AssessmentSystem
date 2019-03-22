using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Report
    {
        [Key]
        public int ReportId { get; set; }
        public int CorrectAnswers { get; set; }
        public int WrongAnswers { get; set; }
        public string TimeTaken { get; set; }
        public int UnattemptedAnswers { get; set; }
        public decimal Accuracy { get; set; }
        public decimal Efficiency { get; set; }
        public decimal MarksScored { get; set; }
        public string QuizType { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
        [ForeignKey("Quiz")]
        public int QuizId { get; set; }

        public virtual Quiz Quiz { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}