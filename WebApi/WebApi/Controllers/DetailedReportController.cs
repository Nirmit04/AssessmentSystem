using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Repository;
using WebApi.Services;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api/v1/DetailedReport")]
    [Authorize]
    public class DetailedReportController : ApiController
    {
        private HelperClass helper = new HelperClass();
        private IDetailedReport rDetailedReport = new RDetailedReport();

        /// <summary>
        /// Returns the detailed report of the particular user in a particular quiz taken
        /// </summary>
        /// <param name="UserId">Mandatory</param>
        /// <param name="QuizId">Mandatory</param>
        /// <returns></returns>
        [HttpGet]
        [Route("{UserId}/{QuizId}")]
        public async Task<IHttpActionResult> GetMockReport([FromUri]string UserId, [FromUri]int QuizId)
        {
            if (!helper.ValidateUserId(UserId))
            {
                return BadRequest("Invalid UserId");
            }
            var detailedReport = await rDetailedReport.GetMockReport(UserId, QuizId);
            return Ok(detailedReport);
        }
    }
}