using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class User
    {   
        [Key]
        public long UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string ImageURL { get; set; }
        public string GoogleId { get; set; }

        
        public virtual ICollection<DetailedReport> DetailedReports { get; set; }
        
        public virtual ICollection<Quiz> Quizs { get; set; }
       
        public virtual ICollection<QuizSchedule> QuizSchedules { get; set; }
        
        public virtual ICollection<Report> Reports { get; set; }
      
        public virtual ICollection<Question> Questions { get; set; }

        public virtual ICollection<Subject> Subjects { get; set; }
    }
}