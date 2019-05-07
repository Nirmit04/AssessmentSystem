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
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class UserController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private HelperClass helper = new HelperClass();
        private static UserStore<ApplicationUser> userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
        private UserManager<ApplicationUser> userManager = new UserManager<ApplicationUser>(userStore);

        /// <summary>
        /// Registers a new User(Employee)
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("api/User/Register")]
        public async Task<IdentityResult> Register(Account model)
        {
            var tempUser = userManager.FindByEmail(model.Email);
            if (tempUser == null)
            {
                ApplicationUser user = new ApplicationUser() { UserName = model.Email.Substring(0, model.Email.LastIndexOf("@")), Email = model.Email };

                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.ImageURL = model.ImageURL;
                user.GoogleId = model.GoogleId;
                string id = user.Id;
                IdentityResult result = await userManager.CreateAsync(user);
                try
                {
                    var tempuser = userManager.FindByEmail(user.Email);
                    userManager.AddToRole(tempuser.Id, "Employee");
                }
                catch (Exception) { }
                return result;
            }
            else
            {
                return IdentityResult.Failed();
            }
        }

        #region RoleAuthorization
        //[HttpGet]
        //[Authorize(Roles = "Content-Creator")]
        //[Route("api/ForContent-CreatorRole")]
        //public string ForContentCreator()
        //{
        //    return "For Content-Creator Role";
        //}

        //[HttpGet]
        //[Authorize(Roles = "Employee")]
        //[Route("EmployeeRole")]
        //public string Employee()
        //{
        //    return "For Employee Role";
        //}

        //[HttpGet]
        //[Authorize(Roles = "Reporting-User")]
        //[Route("ReportingUser")]
        //public string Intern()
        //{
        //    return "For Reporting-User Role";
        //}

        //[HttpGet]
        //[Authorize(Roles = "Test-Administrator")]
        //[Route("TestAdministratorRole")]
        //public string TestAdministrator()
        //{
        //    return "For Test-Administrator Role";
        //}
        #endregion

        /// <summary>
        /// Returns all the user Registered
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/User/GetUserAll")]
        public IQueryable<Account> GetUserAll()
        {
            var users = userManager.Users;
            List<Account> userlist = new List<Account>();
            foreach (var user in users)
            {
                userlist.Add(new Account
                {
                    Id = user.Id,
                    UserName = user.UserName,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    ImageURL = user.ImageURL,
                    Roles = helper.GetUserRoles(user.Id),
                    GoogleId = user.GoogleId,
                });
            }
            return userlist.AsQueryable();
        }

        /// <summary>
        /// Returns the details of a particular user
        /// </summary>
        /// <param name="email">Mandatory</param>
        /// <returns></returns>
        [HttpGet]
        [AllowAnonymous]
        [Route("api/GetUserDetails")]
        public async Task<IHttpActionResult> UserDetails(string email)
        {
            if (email == null)
            {
                return null;
            }
            var applicationUser = await userManager.FindByEmailAsync(email);
            Account user = new Account();
            user.Id = applicationUser.Id;
            user.Email = applicationUser.Email;
            user.FirstName = applicationUser.FirstName;
            user.LastName = applicationUser.LastName;
            user.UserName = applicationUser.UserName;
            user.Roles = helper.GetUserRoles(applicationUser.Id);
            user.GoogleId = applicationUser.GoogleId;
            return Ok(user);
        }

        /// <summary>
        /// Returns Quiz,Questions, Tags created by that user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/Stats/{UserId}")]
        public IHttpActionResult UserStats(string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid Id");
            }
            Dictionary<string, int> userStats = new Dictionary<string, int>();
            userStats.Add("QuizzesCreated", db.Quizs.Where(x => x.CreatedBy == UserId).Count());
            userStats.Add("QuestionsCreated", db.Questions.Where(x => x.CreatedBy == UserId).Count());
            userStats.Add("TagsCreated", db.Subjects.Where(x => x.CreatedBy == UserId).Count());
            return Ok(userStats);
        }

    }
}