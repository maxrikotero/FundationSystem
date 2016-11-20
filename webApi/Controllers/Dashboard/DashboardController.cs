using logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace webapi.Controllers.Dashboard
{
    [RoutePrefix("fundation/dashboard")]
    public class DashboardController : ApiController
    {
        [Route("getmodel")]
        [AcceptVerbs("GET")]
        public dynamic getModel()
        {
            return true;
        }
    }
}
