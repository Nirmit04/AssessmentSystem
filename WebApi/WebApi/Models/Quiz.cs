using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Quiz
    {
        [Key]
        public int QuizId { get; set; }
        public string QuizName { get; set; }
        public string Difficulty { get; set; }
        public int TotalQuestions { get; set; }
        public decimal TotalMarks { get; set; } = 0.00m;
        public bool ArchiveStatus { get; set; } = false;
        public string QuizType { get; set; } = "Non-Mock";
        public int[] QuestionIds { get; set; }
        public string QuizTime { get; set; } = null;

        [ForeignKey("Subject")]
        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }

        [ForeignKey("User")]
        public string CreatedBy { get; set; }
        public virtual ApplicationUser User { get; set; }

        public virtual ICollection<DetailedReport> DetailedReports { get; set; }
        public virtual ICollection<QuizSchedule> QuizSchedules { get; set; }
        public virtual ICollection<UserSchedule> UserSchedules { get; set; }
        public virtual ICollection<QuizQuestion> QuizQuestions { get; set; }
        public virtual ICollection<Report> Reports { get; set; }
    }
}