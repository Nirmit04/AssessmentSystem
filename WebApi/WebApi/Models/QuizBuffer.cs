using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class QuizBuffer
    {
        [Key]
        public int QuizBufferId { get; set; }
        public int Index { get; set; }
        public string State { get; set; }
        public int MarkedAnswer { get; set; }
        public string ResponseTime { get; set; } = "00:00:00";

        [ForeignKey("User")]
        public string UserId { get; set; }
        [ForeignKey("Quiz")]
        public int QuizId { get; set; }
        [ForeignKey("Question")]
        public int QuestionId { get; set; }

        [JsonIgnore]
        public virtual Question Question { get; set; }
        [JsonIgnore]
        public virtual Quiz Quiz { get; set; }
        [JsonIgnore]
        public virtual ApplicationUser User { get; set; }
    }
}