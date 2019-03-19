using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class InviteController : ApiController
    {
        public static string InviteUser(string[] UserEmailIds, string Message)
        {
            try
            {
                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress("abhijeet.anand99@gmail.com");
                foreach(var id in UserEmailIds)
                {
                    mailMessage.To.Add(id);
                }
                mailMessage.CC.Add("nirmit.agarwal@nineleaps.com");
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
    }
}
