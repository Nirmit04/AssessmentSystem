using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
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

        [ForeignKey("Subject")]
        public int SubjectId { get; set; }
        [ForeignKey("User")]
        public long CreatedBy { get; set; }

        //Foreign Key reference table
        public virtual Subject Subject { get; set; }
        public virtual User User { get; set; }


        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DetailedReport> DetailedReports { get; set; }
        
    }
}