using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApi.Controllers
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    [RoutePrefix("api")]
    [AllowAnonymous]
    public class DefaultController : ApiController
    {
        [HttpGet]
        [Route]
        public IHttpActionResult Server()
        {
            return Ok("Your Version 1.0 APIs is running at http://localhost:8000/api/v1");
        }

        [HttpGet]
        [Route("v1")]
        public IHttpActionResult ServerV1()
        {
            return Ok("Your Version 1.0 APIs is running at http://localhost:8000/api/v1");
        }
    }
}
