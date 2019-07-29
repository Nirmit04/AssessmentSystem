﻿using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using WebApi.Repository;

namespace WebApi.Models
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class Question
    {
        public int QuestionId { get; set; }
        public string QuestionStatement { get; set; }
        public string Option1 { get; set; }
        public string Option2 { get; set; }
        public string Option3 { get; set; }
        public string Option4 { get; set; }
        public int Answer { get; set; }
        public decimal Marks { get; set; }
        public string ImageName { get; set; }
        public string Difficulty { get; set; }
        public string QuestionType { get; set; } = "Scheduled";

        [NotMapped]
        public SubjectTag[] Tags { get; set; }
        [ForeignKey("User")]
        public string CreatedBy { get; set; }

        [JsonIgnore]
        public virtual ApplicationUser User { get; set; }
        [JsonIgnore]
        public virtual ICollection<DetailedReport> DetailedReports { get; set; }
        [JsonIgnore]
        public virtual ICollection<QuizQuestion> QuizQuestions { get; set; }
        [JsonIgnore]
        public virtual ICollection<QuestionTag> QuestionTags { get; set; }
    }
}