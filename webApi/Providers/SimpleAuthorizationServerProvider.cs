using logic.Auth;
using logic.UsersDTOs;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web.Security;

namespace webapi.Providers
{
    public class SimpleAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
            return Task.FromResult<object>(null);
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            //context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });
            #region Username / Password Required
            if (string.IsNullOrWhiteSpace(context.UserName))
            {
                context.SetError("Username", "The Username is Required");
                return;
            }
            if (string.IsNullOrWhiteSpace(context.Password))
            {
                context.SetError("Password", "The Password is Required");
                return;
            }
            #endregion
            try
            {
                appUser user = Auth.UserLogin(context.UserName, context.Password);
                if (user == null)
                {
                    context.SetError("invalid_grant", "The Username or Password is incorrect.");
                    return;
                }
                if (!user.isApproved)
                {
                    context.SetError("invalid_grant", "User is not approved");
                    return;
                }
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                identity.AddClaim(new Claim("sub", context.UserName));
                identity.AddClaim(new Claim("role", "user"));

                AuthenticationProperties props = new AuthenticationProperties(new Dictionary<string, string>() {
                    { "account_id", user.UserId.Value.ToString() },
                    { "username", user.username },
                    { "roles", string.Join(", ", user.roles) },
                    { "name", string.IsNullOrEmpty(user.nombre) ? "" : user.nombre },
                    { "lastlogin",  user.lastlogin },
                    { "picture", string.IsNullOrEmpty( user.picture ) ? "" : user.picture }
                });
                AuthenticationTicket ticket = new AuthenticationTicket(identity, props);

                context.Validated(ticket);
            }
            catch (Exception ex)
            {
                switch (ex.Message)
                {
                    case "Invalid Password":
                    case "User not found":
                        context.SetError("invalid_grant", "The Username or Password is incorrect.");
                        return;
                    case "User locked out":
                        context.SetError("invalid_grant", "The User is Locked Out");
                        return;
                    default:
                        context.SetError("invalid_grant", "Error while validating user");
                        return;
                }
            }
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }

        
    }
}