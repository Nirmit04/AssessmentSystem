using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class UserController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        [HttpPost]
        [AllowAnonymous]
        [Route("api/User/Register")]
        public IdentityResult Register(Account model)
        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);
            Random rnd = new Random();
            var dumuser = manager.FindByEmail(model.Email);
            if (dumuser == null)
            {
                ApplicationUser user = new ApplicationUser() { UserName = model.Email.Substring(0, model.Email.LastIndexOf("@")), Email = model.Email };

                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.ImageURL = model.ImageURL;
                user.GoogleId = model.GoogleId;
                string id = user.Id;
                IdentityResult result = manager.Create(user);
                try
                {
                    var tempuser = manager.FindByEmail(user.Email);
                    manager.AddToRole(tempuser.Id, "Employee");
                }
                catch(Exception)
                { }
                return result;
            }
            else
            {
                return IdentityResult.Failed();
            }
            
        }

        [HttpGet]
        [Authorize(Roles = "Content-Creator")]
        [Route("api/ForContent-CreatorRole")]
        public string ForContentCreator()
        {
            return "For Content-Creator Role";
        }

        [HttpGet]
        [Authorize(Roles = "Employee")]
        [Route("EmployeeRole")]
        public string Employee()
        {
            return "For Employee Role";
        }

        [HttpGet]
        [Authorize(Roles = "Reporting-User")]
        [Route("ReportingUser")]
        public string Intern()
        {
            return "For Reporting-User Role";
        }

        [HttpGet]
        [Authorize(Roles = "Test-Administrator")]
        [Route("TestAdministratorRole")]
        public string TestAdministrator()
        {
            return "For Test-Administrator Role";
        }

        [HttpGet]
        [Route("api/User/GetUserAll")]
        public IQueryable<Account> GetUserAll()
        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);
            var users = manager.Users;
            List<Account> userlist = new List<Account>();
            foreach (var user in users)
            {
                System.Diagnostics.Debug.WriteLine("ge ts   "+user.Id);

                userlist.Add(new Account
                {
                    Id = user.Id,
                    UserName = user.UserName,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    ImageURL = user.ImageURL,
                    Roles = GetUserRoles(user.Id),
                    GoogleId = user.GoogleId,
                });
               
            }
            return userlist.AsQueryable();
        }


        [HttpGet]
        [AllowAnonymous]
        [Route("api/GetUserDetails")]
        public IHttpActionResult UserDetails(string email)
        {
            if (email == null)
            {
                return null;
            }
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);
            var applicationUser = manager.FindByEmail(email);
            Account user = new Account();
            user.Id = applicationUser.Id;
            user.Email = applicationUser.Email;
            user.FirstName = applicationUser.FirstName;
            user.LastName = applicationUser.LastName;
            user.UserName = applicationUser.UserName;
            user.Roles = GetUserRoles(applicationUser.Id);
            user.GoogleId = applicationUser.GoogleId;
            return Ok(user);
        }


        [HttpGet]
        [Route("api/Stats/{UserId}")]
        public IHttpActionResult UserStats(string UserId)
        {
            Dictionary<string, int> userStats = new Dictionary<string, int>();
            userStats.Add("QuizzesCreated", db.Quizs.Where(x => x.CreatedBy == UserId).Count());
            userStats.Add("QuestionsCreated", db.Questions.Where(x => x.CreatedBy == UserId).Count());
            userStats.Add("TagsCreated", db.Subjects.Where(x => x.CreatedBy == UserId).Count());
            return Ok(userStats);
        }

        #region Helpers

        public string[] GetUserRoles(string userId)
        {
            if(userId==null)
            {
                return null;
            }
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            UserManager<ApplicationUser> manager = new UserManager<ApplicationUser>(userStore);
            var roles = manager.GetRoles(userId);
            return roles.ToArray();
        }

        #endregion
    }
}
