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
    public class QuestionTag
    {
        [Key, Column(Order = 0), ForeignKey("Question")]
        public int QuestionId { get; set; }
        [JsonIgnore]
        public virtual Question Question { get; set; }

        [Key, Column(Order = 1), ForeignKey("Subject")]
        public int SubjectId { get; set; }
        [JsonIgnore]
        public virtual Subject Subject { get; set; }
    }
}