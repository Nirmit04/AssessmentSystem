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
        public int QuizScheduleId { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }
        public bool ArchiveStatus { get; set; }
        
        [ForeignKey("Quiz")]
        public int QuizId { get; set; }

        [ForeignKey("TestAdmin")]
        public string CreatedBy { get; set; }

        public string[] UserIds { get; set; }
        public virtual Quiz Quiz { get; set; }
        public virtual ApplicationUser TestAdmin { get; set; }

        public virtual ICollection<UserSchedule> UserSchedules { get; set; }

    }
}