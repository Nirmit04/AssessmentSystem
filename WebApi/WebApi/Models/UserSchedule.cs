using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class UserSchedule
    {

        public int UserScheduleId { get; set; }

        [ForeignKey("QuizSchedule")]
        public int QuizScheduleId { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
       

        public bool Taken { get; set; }

        public virtual QuizSchedule QuizSchedule { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}