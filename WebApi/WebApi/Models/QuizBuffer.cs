using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class QuizBuffer
    {
        [Key]
        public int QuizBufferId { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        [ForeignKey("Quiz")]
        public int QuizId { get; set; }

        [ForeignKey("Question")]
        public int QuestionId { get; set; }

        public int Index { get; set; }

        public string State { get; set; }

        public int MarkedAnswer { get; set; }

        [JsonIgnore]
        public virtual Question Question { get; set; }
        [JsonIgnore]
        public virtual Quiz Quiz { get; set; }
        [JsonIgnore]
        public virtual ApplicationUser User { get; set; }
    }
}