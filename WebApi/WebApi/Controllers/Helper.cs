using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class Helper
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        public Boolean ValidateQuizSchedule(int QuizScheduleId)
        {
            if (db.QuizSchedules.Find(QuizScheduleId) == null)
                return false;
            else
                return true;
        }

        public Boolean ValidateUserId(string UserId)
        {
            if (db.Users.Find(UserId) == null)
                return false;
            else
                return true;
        }


    }
}