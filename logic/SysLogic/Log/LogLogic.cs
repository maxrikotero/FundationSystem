using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace logic.SysLogic
{
    public abstract class LogLogic
    {
        public static void logRequest(HttpRequestMessage request)
        {
            //TODO log de llamadas a la Api
        }

        public static void logResponse(string responseBody)
        {
            //TODO log respuesta a lamada
        }
    }
            
}
