using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/Role")]
    [Authorize]
    public class RoleController : ApiController
    {
        private IRoles rRoles = new RRoles();

        /// <summary>
        /// Returns all the roles available
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route]
        public async Task<IHttpActionResult> GetRoles()
        {
            var roles = await rRoles.GetRoles();
            return Ok(roles);
        }
    }
}