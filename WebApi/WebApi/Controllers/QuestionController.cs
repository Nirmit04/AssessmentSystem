using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class QuestionController : ApiController
    {
        [HttpPut]
        [Route("api/Question/Edit/{Question_ID}")]

        //public HttpStatusCode EditQuestion(Question question)
        //{
        //    DBModel db = new DBModel();
        //}
    }
}
