using Newtonsoft.Json;
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
        public bool ArchiveStatus { get; set; } = false; //Soft Delete
        public bool QuizState { get; set; } = false; // Active = true & Inactive = false
        public decimal MinCutOff { get; set; } = 40.00m; //In Percent
        public string QuizType { get; set; } = "Scheduled";
        public int[] QuestionIds { get; set; }
        public string QuizTime { get; set; } = null;

        [NotMapped]
        public SubjectTag[] Tags { get; set; }
        [ForeignKey("User")]
        public string CreatedBy { get; set; }

        [JsonIgnore]
        public virtual ApplicationUser User { get; set; }
        [JsonIgnore]
        public virtual ICollection<DetailedReport> DetailedReports { get; set; }
        [JsonIgnore]
        public virtual ICollection<QuizSchedule> QuizSchedules { get; set; }
        [JsonIgnore]
        public virtual ICollection<UserSchedule> UserSchedules { get; set; }
        [JsonIgnore]
        public virtual ICollection<QuizQuestion> QuizQuestions { get; set; }
        [JsonIgnore]
        public virtual ICollection<Report> Reports { get; set; }
        [JsonIgnore]
        public virtual ICollection<QuizTag> QuizTags { get; set; }
    }
}