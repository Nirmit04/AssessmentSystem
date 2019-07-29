using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Services;

namespace WebApi.Repository
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class RSubject : ISubject
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public async Task<IEnumerable<Subject>> GetAllSubjects()
        {
            var subject = await db.Subjects.ToListAsync();
            return subject;
        }

        public async Task<IEnumerable<Subject>> GetSubjectsByUser(string UserId)
        {
            var subject = await db.Subjects.Where(x => x.CreatedBy == UserId).ToListAsync();
            return subject;
        }

        public async Task<int> CreateSubject(Subject subject)
        {
            db.Subjects.Add(subject);
            return await db.SaveChangesAsync();
        }

        public async Task<int> UpdateSubject(Subject subject)
        {
            db.Entry(subject).State = EntityState.Modified;
            return await db.SaveChangesAsync();
        }

        #region Helpers
        public async Task<bool> SubjectExists(int id)
        {
            return await db.Subjects.CountAsync(x => x.SubjectId == id) > 0;
        }
        #endregion
    }
}