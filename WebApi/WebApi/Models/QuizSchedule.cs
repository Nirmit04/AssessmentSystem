using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class QuizSchedule
    {
        [Key]
        public int ScheduleId { get; set; }
        public  System.DateTime  StartDateTime { get; set; }
        public  System.DateTime  EndDateTime { get; set; }
        public  int  ArchiveStatus { get; set; }

        [ForeignKey("User")]
        public  long  UserId { get; set; }
        [ForeignKey("Quiz")]
        public int QuizId { get; set; }

        public virtual Quiz Quiz { get; set; }
        public virtual User User { get; set; }
    }
}