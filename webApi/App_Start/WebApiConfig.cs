using logic;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Cors;
using System.Web.Http;
using webapi.Log;

namespace webapi
{
    public static class WebApiConfig
    {
        

        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always;
            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            GlobalConfiguration.Configuration.Formatters.JsonFormatter.SerializerSettings.Culture = System.Globalization.CultureInfo.CurrentCulture;
            //config.Formatters.JsonFormatter.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.IsoDateFormat;
            //config.Formatters.JsonFormatter.SerializerSettings.DateFormatString = "dd/MM/yyyy";

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            //TODO: enable logging by web.config key
            //config.MessageHandlers.Add(new LogRequestAndResponseHandler());
        }

        internal static Microsoft.Owin.Cors.CorsOptions GetCorsPolicy()
        {
            var options = new CorsOptions()
            {
                PolicyProvider = new CorsPolicyProvider()
                {
                    PolicyResolver = (IOwinRequest context) =>
                    {
                        var setting = ConfigurationManager.AppSettings;
                        var policy = new CorsPolicy()
                        {
                            AllowAnyHeader = Convert.ToBoolean(setting.Get("AllowAnyHeader")),
                            AllowAnyMethod = Convert.ToBoolean(setting.Get("AllowAnyMethod")),
                            AllowAnyOrigin = Convert.ToBoolean(setting.Get("AllowAnyOrigin")),
                            SupportsCredentials = true
                        };
                        if (!policy.AllowAnyOrigin)
                        {
                            foreach (string domain in setting.Get("AllowDomains").Split(','))
                            {
                                policy.Origins.Add(domain);
                            }
                        }
                        if (!policy.AllowAnyHeader)
                        {
                            //foreach (string header in setting.Get("AllowHeaders").Split(','))
                            //{
                            //    policy.Headers.Add(header);
                            //}
                        }
                        return Task.FromResult<CorsPolicy>(policy);
                    }
                }
            };
            return options;
        }
    }
}
