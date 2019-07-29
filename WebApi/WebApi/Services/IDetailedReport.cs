using System.Collections;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public interface IDetailedReport
    {
        Task<IEnumerable> GetMockReport(string UserId, int QuizId);
        Task<int> CreateDetailedReport(DetailedReport detailed);
    }
}