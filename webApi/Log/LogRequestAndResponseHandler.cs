using logic.SysLogic;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace webapi.Log
{
    public class LogRequestAndResponseHandler : DelegatingHandler
    {
        protected override async Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request, CancellationToken cancellationToken)
        {
            LogLogic.logRequest(request);
            
            var result = await base.SendAsync(request, cancellationToken);

            var responseBody = await result.Content.ReadAsStringAsync();

            LogLogic.logResponse(responseBody);

            return result;
        }
    }
}