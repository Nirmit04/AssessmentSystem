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
    public class UserSchedule
    {
        [Key]
        public int UserScheduleId { get; set; }
        public bool Taken { get; set; }

        [ForeignKey("QuizSchedule")]
        public int QuizScheduleId { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; }
        [ForeignKey("Quiz")]
        public int QuizId { get; set; }

        [JsonIgnore]
        public virtual Quiz Quiz { get; set; }
        [JsonIgnore]
        public virtual QuizSchedule QuizSchedule { get; set; }
        [JsonIgnore]
        public virtual ApplicationUser User { get; set; }
    }
}