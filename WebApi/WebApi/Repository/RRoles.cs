using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Repository
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class RRoles : IRoles
    {
        private static readonly RoleStore<IdentityRole> roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext());
        private RoleManager<IdentityRole> roleManager = new RoleManager<IdentityRole>(roleStore);

        public async Task<IEnumerable<IdentityRole>> GetRoles()
        {
            var roles = await roleManager.Roles
                .ToListAsync();
            return roles;
        }
    }
}