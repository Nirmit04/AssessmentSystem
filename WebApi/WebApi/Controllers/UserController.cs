using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/User")]
    [Authorize]
    public class UserController : ApiController
    {
        private HelperClass helper = new HelperClass();
        private Services.IUser rUser = new RUser();
        private IQuestion rQuestion = new RQuestion();
        private IQuiz rQuiz = new RQuiz();
        private ISubject rSubject = new RSubject();

        /// <summary>
        /// Registers a new User(Employee)
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IdentityResult> Register([FromBody]Account model)
        {
            var tempUser = await rUser.GetUserByEmail(model.Email);
            if (tempUser == null)
            {
                ApplicationUser user = new ApplicationUser()
                {
                    UserName = model.Email.Substring(0, model.Email.LastIndexOf("@")),
                    Email = model.Email,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    ImageURL = model.ImageURL,
                    GoogleId = model.GoogleId
                };               
                string id = user.Id;
                IdentityResult userResult = await rUser.CreateUser(user);
                try
                {
                    var userTemp = await rUser.GetUserByEmail(user.Email);
                    IdentityResult roleResult = await rUser.AddRole(userTemp);
                }
                catch (Exception) { }
                return userResult;
            }
            else
            {
                return IdentityResult.Failed();
            }
        }

        /// <summary>
        /// Returns all the user Registered
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route]
        public async Task<IHttpActionResult> GetAllUser()
        {
            var userList = await rUser.GetAllUsers();
            return Ok(userList);
        }

        /// <summary>
        /// Returns the details of a particular user
        /// </summary>
        /// <param name="Email">Mandatory</param>
        /// <returns></returns>
        [HttpGet]
        [Route("{Email}")]
        public async Task<IHttpActionResult> UserDetails([FromUri]string Email)
        {
            if (Email == null)
            {
                return null;
            }
            var applicationUser = await rUser.GetUserByEmail(Email);
            Account user = new Account()
            {
                Id = applicationUser.Id,
                Email = applicationUser.Email,
                FirstName = applicationUser.FirstName,
                LastName = applicationUser.LastName,
                UserName = applicationUser.UserName,
                Roles = helper.GetUserRoles(applicationUser.Id),
                GoogleId = applicationUser.GoogleId
            };
            return Ok(user);
        }

        /// <summary>
        /// Returns Quiz,Questions, Tags created by that user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Stats/{UserId}")]
        public async Task<IHttpActionResult> UserStats([FromUri]string UserId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            Dictionary<string, int> userStats = new Dictionary<string, int>();
            var quizzes = await rQuiz.GetAllQuizzesByUsers(UserId);
            var questionsCount = await rQuestion.GetQuestionsByUsersCount(UserId);
            var subjects = await rSubject.GetSubjectsByUser(UserId);
            userStats.Add("QuizzesCreated", quizzes.Count());
            userStats.Add("QuestionsCreated", questionsCount);
            userStats.Add("TagsCreated", subjects.Count());
            return Ok(userStats);
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
    }
}