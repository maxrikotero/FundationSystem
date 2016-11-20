using logic.DBConnections;
using logic.DTOs;
using logic.UsersDTOs;
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Web.Security;
using System.Web.Script.Serialization;

using System.Text;
using System.Collections.Generic;
using System.Configuration;

namespace logic.Auth
{
    public abstract class Auth
    {
        public static appUser UserLogin(string username, string password)
        {
            username = username.ToLower();
            using (var db = new IMAC_usuariosContext())
            {
                var result = db.Database.SqlQuerySmart<password_with_format>("usp_IMAC_Usuario_GetPaswordHashAndSalt", new
                {
                    ApplicationName = "IMAC",
                    UserName = username,
                    UpdateLastLoginActivityDate = true
                }).FirstOrDefault();

                if (result == null)
                {
                    throw new Exception("User not found");
                }

                if (result.IsLockedOut)
                {
                    throw new Exception("User locked out");
                }

                var validated = ValidatePassword(password, result.Password, result.PasswordSalt);

                if (!validated)
                {
                    int countToBlock = 3;
                    if (ConfigurationManager.AppSettings.Get("CountToBlock") != null)
                    {
                        Int32.TryParse(ConfigurationManager.AppSettings.Get("CountToBlock"), out countToBlock);
                    }
                    var invalidPasswordCount = db.Database.SqlQuerySmart<invalid_password_count_result>("usp_IMAC_Usuario_InvalidPassword", new
                    {
                        UserId = result.UserId,
                        CountToBlock = countToBlock
                    }).FirstOrDefault();
                    if (invalidPasswordCount.LockedOut)
                    {
                        throw new Exception("User locked out");
                    }
                    throw new Exception("Invalid Password");
                }
                var person = new LoginPerfilGet();
                var roles = new List<string>();
                if (result.IsApproved)
                {
                    person = new IMAC_sysContext().Database.SqlQuerySmart<LoginPerfilGet>("usp_IMAC_Usuario_LoginPerfilGet", new
                    {
                        UserId = result.UserId
                    }).FirstOrDefault();
                    roles = db.Database.SqlQuerySmart<string>("aspnet_UsersInRoles_GetRolesForUser", new
                    {
                        ApplicationName = "IMAC",
                        UserName = username
                    }).ToList();
                }
                return new appUser()
                {
                    UserId = result.UserId,
                    roles = roles,
                    username = username,
                    nombre = person != null ? person.Nombre : null,
                    isApproved = result.IsApproved,
                    lastlogin = result.LastLoginDate.HasValue ? (result.LastLoginDate.Value.ToShortDateString() + " - " + result.LastLoginDate.Value.ToShortTimeString()) : "",
                    picture = person != null ? person.Picture : null
                };
            }
        }

        private static bool ValidatePassword(string spassword, string password, string salt)
        {
            if (password != CreatePasswordHash(spassword, salt))
                return false;
            return true;
        }

        public static string CreateSalt(int nSize)
        {
            RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
            byte[] buff = new byte[nSize];
            rng.GetBytes(buff);
            return Convert.ToBase64String(buff);
        }

        public static string CreatePasswordHash(string spassword, string salt)
        {
            byte[] bIn = Encoding.Unicode.GetBytes(spassword);
            byte[] bSalt = Convert.FromBase64String(salt);
            byte[] bAll = new byte[bSalt.Length + bIn.Length];
            byte[] bRet = null;

            Buffer.BlockCopy(bSalt, 0, bAll, 0, bSalt.Length);
            Buffer.BlockCopy(bIn, 0, bAll, bSalt.Length, bIn.Length);

            HashAlgorithm s = HashAlgorithm.Create("SHA1");

            bRet = s.ComputeHash(bAll);

            return Convert.ToBase64String(bRet);
        }
    }
}