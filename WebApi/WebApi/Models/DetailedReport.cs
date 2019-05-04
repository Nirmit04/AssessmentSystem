using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class DetailedReport
    {
        [Key]
        public int DetailedReportId { get; set; }
        public int AttemptedAnswer { get; set; }
        public int CorrectAnswer { get; set; }
        public string ResponseTime { get; set; } = "00:00:00";

        [ForeignKey("Quiz")]
        public int QuizId { get; set; }
        [ForeignKey("Question")]
        public int QuestionId { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        [JsonIgnore]
        public virtual Question Question { get; set; }
        [JsonIgnore]
        public virtual Quiz Quiz { get; set; }
        [JsonIgnore]
        public virtual ApplicationUser User { get; set; }
    }
}