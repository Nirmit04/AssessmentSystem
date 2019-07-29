using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;
using WebApi.Models;

namespace WebApi.Providers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var userManager = new UserManager<ApplicationUser>(userStore);
            ApplicationUser user = await userManager.FindByEmailAsync(context.UserName);

            if (user == null)
            {
                context.SetError("invalid_grant", "The user name is incorrect.");
                context.Rejected();
                return;
            }

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(context.Options.AuthenticationType);
            claimsIdentity.AddClaim(new Claim("Email", user.Email));
            claimsIdentity.AddClaim(new Claim("UserName", user.UserName));
            claimsIdentity.AddClaim(new Claim("FirstName", user.FirstName));
            claimsIdentity.AddClaim(new Claim("LastName", user.LastName));
            claimsIdentity.AddClaim(new Claim("GoogleId", user.GoogleId));
            var userRoles = userManager.GetRoles(user.Id);
            foreach (string roleName in userRoles)
            {
                claimsIdentity.AddClaim(new Claim(ClaimTypes.Role, roleName));
            }
            AuthenticationProperties properties = CreateProperties(user.UserName, userRoles);
            AuthenticationTicket ticket = new AuthenticationTicket(claimsIdentity, properties);
            context.Validated(ticket);
            //context.Request.Context.Authentication.SignIn(claimsIdentity);
        }

        public static AuthenticationProperties CreateProperties(string userName, IList<string> userRoles)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "UserName", userName },
                { "Role" , JsonConvert.SerializeObject(userRoles) }
            };
            return new AuthenticationProperties(data);
        }
    }
}