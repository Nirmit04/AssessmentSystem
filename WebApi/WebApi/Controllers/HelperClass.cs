using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class HelperClass
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private static UserStore<ApplicationUser> userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
        private UserManager<ApplicationUser> userManager = new UserManager<ApplicationUser>(userStore);

        /// <summary>
        /// This method is to invite the users to take a Scheduled Quiz via Email
        /// </summary>
        /// <param name="UserEmailIds"></param>
        /// <param name="Message"></param>
        /// <returns></returns>
        public string InviteUser(string[] UserEmailIds, string Message)
        {
            try
            {
                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress("abhijeet.anand99@gmail.com");
                foreach (var id in UserEmailIds)
                {
                    mailMessage.To.Add(id);
                }
                //mailMessage.CC.Add("sample@nineleaps.com");
                mailMessage.Subject = "Assessment System - Nineleaps Technology Pvt. Ltd.";
                mailMessage.IsBodyHtml = true;
                mailMessage.Body = "Hi,\n\n" + Message + "\n\nRegards,\nAbhijeet Anand Shah";
                mailMessage.IsBodyHtml = true;
                SmtpClient smtpClient = new SmtpClient();
                smtpClient.Host = "smtp.gmail.com";
                NetworkCredential credentials = new NetworkCredential("abhijeet.anand99@gmail.com", "upmsfuviwsogdsyb");
                smtpClient.Credentials = credentials;
                smtpClient.Port = 587;
                smtpClient.EnableSsl = true;
                smtpClient.Send(mailMessage);
                return "Invite Sent";
            }
            catch (Exception)
            {
                return "Sending Invite Failed";
            }
        }

        private const string GoogleApiTokenInfoUrl = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={0}";

        public static GoogleApiTokenInfo GetExternalUserDetails(string IdToken)
        {
            var httpClient = new HttpClient();
            var requestUri = new Uri(string.Format(GoogleApiTokenInfoUrl, IdToken));

            HttpResponseMessage httpResponseMessage;
            try
            {
                httpResponseMessage = httpClient.GetAsync(requestUri).Result;
            }
            catch (Exception)
            {
                throw;
            }

            if (httpResponseMessage.StatusCode != HttpStatusCode.OK)
            {
                return null;
            }

            var response = httpResponseMessage.Content.ReadAsStringAsync().Result;
            var googleApiTokenInfo = JsonConvert.DeserializeObject<GoogleApiTokenInfo>(response);

            return googleApiTokenInfo;
        }


        public void ReduceImageSize(double scaleFactor, Stream sourcePath, string targetPath)
        {
            using (var image = Image.FromStream(sourcePath))
            {
                var newWidth = (int)(image.Width * scaleFactor);
                var newHeight = (int)(image.Height * scaleFactor);
                var thumbnailImg = new Bitmap(newWidth, newHeight);
                var thumbGraph = Graphics.FromImage(thumbnailImg);
                thumbGraph.CompositingQuality = CompositingQuality.HighQuality;
                thumbGraph.SmoothingMode = SmoothingMode.HighQuality;
                thumbGraph.InterpolationMode = InterpolationMode.HighQualityBicubic;
                var imageRectangle = new Rectangle(0, 0, newWidth, newHeight);
                thumbGraph.DrawImage(image, imageRectangle);
                thumbnailImg.Save(targetPath, image.RawFormat);
            }
        }

        public List<int> GetQuestionIdsBySubject(SubjectTag[] subjectTags)
        {
            List<int> subIds = new List<int>();
            foreach (var item in subjectTags)
            {
                subIds.Add(item.SubjectId);
            }
            HelperClass helper = new HelperClass();
            var qIds = db.QuestionTags
                .AsEnumerable()
                .Where(x => subIds.Contains(x.SubjectId) && helper.GetQuestionSubjectTags(x.QuestionId).Count() >= subIds.Count())
                .Select(x => x.QuestionId)
                .ToList();
            return qIds;
        }

        public string[] GetUserRoles(string userId)
        {
            if (userId == null)
            {
                return null;
            }
            var roles = userManager.GetRoles(userId);
            return roles.ToArray();
        }

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

        public SubjectTag[] GetQuestionSubjectTags(int QuestionId)
        {
            var subIds = db.QuestionTags
                .Where(x => x.QuestionId == QuestionId)
                .Select(z => z.SubjectId)
                .ToList();
            var subjectTags = db.Subjects
                .Where(x => subIds.Contains(x.SubjectId))
                .Select(y => new SubjectTag()
                {
                    SubjectId = y.SubjectId,
                    Name = y.Name
                }).ToArray();
            return subjectTags;
        }

        public SubjectTag[] GetQuizSubjectTags(int QuizId)
        {
            var subIds = db.QuizTags
                .Where(x => x.QuizId == QuizId)
                .Select(z => z.SubjectId)
                .ToList();
            var subjectTags = db.Subjects
                .Where(x => subIds.Contains(x.SubjectId))
                .Select(y => new SubjectTag()
                {
                    SubjectId = y.SubjectId,
                    Name = y.Name
                }).ToArray();
            return subjectTags;
        }

    }
}