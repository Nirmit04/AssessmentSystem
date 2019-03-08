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

        [Route("api/User/Register")]
        [HttpPost]
        [AllowAnonymous]
        public IdentityResult Register(Account model)
        {
            System.Diagnostics.Debug.WriteLine(model.FirstName);
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);

            if (manager.FindByEmail(model.Email) != null)
            {
                return IdentityResult.Failed();
            }
            else
            {
                var user = new ApplicationUser() { UserName = model.UserName, Email = model.Email };
                user.FirstName = model.FirstName;
                user.LastName = model.LastName;
                user.ImageURL = model.ImageURL;
                user.GoogleId = model.GoogleId;
                user.Role = model.Role;
                IdentityResult result = manager.Create(user);
                return result;
            }
        }
    }
}