using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class QuesAnswer
    {
        public int QuestionID { get; set; }
        public int MarkedAnswer { get; set; }
    }

    public class EvalutionAnswer
    {
        public ICollection<QuesAnswer> QuesAnswers { get; set; }
        public int QuizId { get; set; }
        public int QuizScheduleId { get; set; }
        public string UserId { get; set; }
        public string TimeTaken { get; set; }
    }
}