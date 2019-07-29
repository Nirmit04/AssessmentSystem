using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface ISubject
    {
        Task<IEnumerable<Subject>> GetAllSubjects();
        Task<IEnumerable<Subject>> GetSubjectsByUser(string UserId);
        Task<int> CreateSubject(Subject subject);
        Task<int> UpdateSubject(Subject subject);
        Task<bool> SubjectExists(int id);
    }
}
