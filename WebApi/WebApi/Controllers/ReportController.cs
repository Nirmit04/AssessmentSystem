using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/Report")]
    [Authorize]
    public class ReportController : ApiController
    {
        private IReport rReport = new RReport();

        /// <summary>
        /// Returns all the scheduled quiz reports of a particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Scheduled/{UserId}")]
        public async Task<IHttpActionResult> GetScheduledReport([FromUri]string UserId)
        {
            var reportList = await rReport.GetQuizReportByQuizType(UserId, "Scheduled");
            return Ok(reportList);
        }

        /// <summary>
        /// Returns all the mock quiz reports of a particular user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Mock/{UserId}")]
        public async Task<IHttpActionResult> GetMockReport([FromUri]string UserId)
        {
            var reportList = await rReport.GetQuizReportByQuizType(UserId, "Mock");
            return Ok(reportList);
        }
    }
}
