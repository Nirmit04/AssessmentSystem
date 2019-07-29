using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Repository
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class RUser : Services.IUser
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private static readonly UserStore<ApplicationUser> userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
        private readonly UserManager<ApplicationUser> userManager = new UserManager<ApplicationUser>(userStore);

        public async Task<ApplicationUser> GetUserByEmail(string Email)
        {
            var user = await userManager.FindByEmailAsync(Email);
            return user;
        }

        public async Task<IdentityResult> CreateUser(ApplicationUser user)
        {
            IdentityResult result = await userManager.CreateAsync(user);
            return result;
        }

        public async Task<IdentityResult> AddRole(ApplicationUser user)
        {
            IdentityResult result = await userManager.AddToRoleAsync(user.Id, "Employee");
            return result;
        }

        public async Task<IEnumerable<ApplicationUser>> GetAllUsers()
        {
            var userList = await db.Users.ToListAsync();
            return userList;
        }

        public async Task<string[]> GetAllUserEmails(IEnumerable<string> userIds)
        {
            var userList = await db.Users.Select(x => x.Email).ToArrayAsync();
            return userList;
        }

        public async Task<IEnumerable> GetUsersByUserIdsAssignedQuiz(IEnumerable<string> userIds, int QuizScheduleId)
        {
            var users = await db.Users
                .Where(x => userIds.Contains(x.Id))
                .ToListAsync();

            var userList = users
               .Select(z => new
               {
                   z.Id,
                   z.UserName,
                   z.FirstName,
                   z.LastName,
                   z.Email,
                   z.ImageURL,
                   z.GoogleId,
                   db.UserSchedules.FirstOrDefault(x => x.UserId == z.Id && x.QuizScheduleId == QuizScheduleId).Taken
               });
            return userList;
        }

        public async Task<IEnumerable<ApplicationUser>> GetUsersByUserIdsNotAssignedQuiz(IEnumerable<string> userIds)
        {
            var userList = await db.Users
                .Where(x => !userIds.Contains(x.Id))
                .ToListAsync();
            return userList;
        }
    }
}