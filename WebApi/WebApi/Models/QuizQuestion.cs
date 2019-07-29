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
    public class QuizQuestion
    {
        [Key, Column(Order = 0), ForeignKey("Quiz")]
        public int QuizId { get; set; }
        [JsonIgnore]
        public virtual Quiz Quiz { get; set; }

        [Key, Column(Order = 1), ForeignKey("Question")]
        public int QuestionId { get; set; }
        [JsonIgnore]
        public virtual Question Question { get; set; }
    }
}