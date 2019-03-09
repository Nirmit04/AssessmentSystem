using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
            var user = new ApplicationUser() { UserName = model.UserName, Email = model.Email };
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.ImageURL = model.ImageURL;
            user.GoogleId = model.GoogleId;
            IdentityResult result = manager.Create(user);
            return result;
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
    }
}
