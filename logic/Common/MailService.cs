using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace logic
{
    public abstract class MailService
    {
        public static bool sendMail(string body, string subject, string to, string fromAddress, string fromName)
        {
            try
            {
                MailMessage msg = new MailMessage();

                msg.IsBodyHtml = true;
                msg.Body = body;
                msg.Subject = subject;
                msg.To.Add(ConfigurationManager.AppSettings.Get("SendAllToSupport") == "true" ? ConfigurationManager.AppSettings.Get("EmailToSupport") : to);
                msg.From = new MailAddress(fromAddress, fromName);
                msg.Sender = new MailAddress(ConfigurationManager.AppSettings.Get("SmptUser"));
                smtp.Send(msg);

                return true;
            }
            catch
            {
                return false;
            }
        }

        private static SmtpClient smtp
        {
            get
            {
                return new SmtpClient()
                {
                    Credentials = new NetworkCredential(ConfigurationManager.AppSettings.Get("SmptUser"),
                        ConfigurationManager.AppSettings.Get("SmptPassword")),
                    Port = 25,
                    Host = ConfigurationManager.AppSettings.Get("SmtpServer")
                };
            }
        }
    }
}
