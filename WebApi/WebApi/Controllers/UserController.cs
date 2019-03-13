using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class UserController : ApiController
    {
        
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
                ApplicationUser user = new ApplicationUser() { UserName = model.FirstName + model.LastName+rnd.Next(), Email = model.Email };
               
                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.ImageURL = model.ImageURL;
                user.GoogleId = model.GoogleId;
                string id = user.Id;
                IdentityResult result = manager.Create(user);
                
            
                try
                { 
                 var user1= manager.FindByEmail(user.Email);
                    System.Diagnostics.Debug.WriteLine(user1.Id + " 11");
                    manager.AddToRole(user1.Id, "content-creator");
                
                }
                catch
                {
                    System.Diagnostics.Debug.WriteLine("Failed");
                }
                
                return result;
            }
            else {
                return IdentityResult.Failed();
            }
            //else
            //{
            //    var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
            //    var roleMngr = new RoleManager<IdentityRole>(roleStore);

            //    IdentityResult role = roleMngr.Roles
            //        .Select(x => new { x.Id, x.Name })
            //        .ToList();
            //    //var role = roleMngr.AddToRole(dumuser.Id, "Content-Creator");
            //    return role;
            //}
        }

        [HttpGet]
        [Authorize(Roles = "Content-Creator")]
        [Route("api/ForContent-CreatorRole")]
        public string ForContentCreator()
        {
            return "Content-Creator";
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
                userlist.Add(new Account
                {
                    Id = user.Id,
                    UserName = user.UserName,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    ImageURL = user.ImageURL,
                    GoogleId = user.GoogleId,
                });
            }
            return userlist.AsQueryable();
            //ApplicationDbContext db = new ApplicationDbContext();
            //var u=db.Users.ToList();
            //return u.AsQueryable();
        }

        //[HttpGet]
        //[AllowAnonymous]
        //[Route("api/GetUserClaims")]
        ///**
        // * GetUserClaims returns claims
        // * @returns A model with the required information
        // **/
        //public Account GetUserClaims()
        //{
        //    var identityClaims = (ClaimsIdentity)User.Identity;
        //    IEnumerable<Claim> claims = identityClaims.Claims;
        //    Account model = new Account()
        //    {
        //        UserName = identityClaims.FindFirst("Username").Value,
        //        Email = identityClaims.FindFirst("Email").Value,
        //        FirstName = identityClaims.FindFirst("FirstName").Value,
        //        LastName = identityClaims.FindFirst("LastName").Value,
        //        Id = identityClaims.FindFirst("Id").Value
        //    };
        //    return model;
        //}

        [HttpGet]
        [AllowAnonymous]
        [Route("api/GetUserDetails")]
        public ApplicationUser UserDetails(string email)
        {
            if(email==null)
            {
                return null;
            }
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);
            System.Diagnostics.Debug.WriteLine(email);
            var modelvar = manager.FindByEmail(email);
            return modelvar;
        }
    }
}
