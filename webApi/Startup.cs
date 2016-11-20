using System;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using System.Configuration;
using webapi.Providers;
using Microsoft.AspNet.SignalR;
using System.Net.Http.Formatting;
using System.Threading;
using System.Web.ModelBinding;
using System.Globalization;
using MVCControlsToolkit.Owin.Globalization;

[assembly: OwinStartup(typeof(webapi.Startup))]

namespace webapi
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var culture = new CultureInfo("es-AR", false);
            culture.DateTimeFormat.DateSeparator = "/";
            culture.DateTimeFormat.ShortDatePattern = "dd/MM/yyyy";
            culture.DateTimeFormat.LongDatePattern = "dd/MM/yyyy hh:mm:ss tt";

            Thread.CurrentThread.CurrentCulture = culture;

            //app.UseGlobalization(new OwinGlobalizationOptions("es-AR", true).DisablePaths("Content", "bundles").AddCustomSeeker(new CultureFromPreferences()));

            app.UseCors(WebApiConfig.GetCorsPolicy());
            HttpConfiguration config = new HttpConfiguration();
            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = !Convert.ToBoolean(ConfigurationManager.AppSettings.Get("OnlyHttps")),
                ApplicationCanDisplayErrors = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromHours(8),
                Provider = new SimpleAuthorizationServerProvider()
            });
            var authOptions = new OAuthBearerAuthenticationOptions()
            {
                AuthenticationMode = Microsoft.Owin.Security.AuthenticationMode.Active
            };
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
            WebApiConfig.Register(config);
            app.UseWebApi(config);
            app.MapSignalR("/signalr", new HubConfiguration
            {
                EnableJavaScriptProxies = true,
                EnableDetailedErrors = true,
                EnableJSONP = true,
            });
        }
    }
}
