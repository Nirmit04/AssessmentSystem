using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Subject
    {
        [Key]
        public int SubjectId { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }

        [ForeignKey("User")]
        public string CreatedBy { get; set; }

        [JsonIgnore]
        public ApplicationUser User { get; set; }
        [JsonIgnore]
        public virtual ICollection<QuestionTag> QuestionTags { get; set; }
        [JsonIgnore]
        public virtual ICollection<QuizTag> QuizTags { get; set; }
    }
}