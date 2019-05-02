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
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class RoleController : ApiController
    {
        /// <summary>
        /// Returns all the roles available
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/GetAllRoles")]
        [AllowAnonymous]
        public IHttpActionResult GetRoles()
        {
            var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
            var roleMngr = new RoleManager<IdentityRole>(roleStore);

            var roles = roleMngr.Roles
                .Select(x => new { x.Id, x.Name })
                .ToList();
            return Ok(roles);
        }
    }
}