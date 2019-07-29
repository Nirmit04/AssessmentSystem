using Microsoft.AspNet.Identity;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface IUser
    {
        Task<ApplicationUser> GetUserByEmail(string Email);
        Task<IdentityResult> CreateUser(ApplicationUser user);
        Task<IdentityResult> AddRole(ApplicationUser user);
        Task<IEnumerable<ApplicationUser>> GetAllUsers();
        Task<string[]> GetAllUserEmails(IEnumerable<string> userIds);
        Task<IEnumerable> GetUsersByUserIdsAssignedQuiz(IEnumerable<string> userIds, int QuizScheduleId);
        Task<IEnumerable<ApplicationUser>> GetUsersByUserIdsNotAssignedQuiz(IEnumerable<string> userIds);
    }
}
