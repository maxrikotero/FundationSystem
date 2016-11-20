using HandlebarsHelper;
using System.Web;
using System.Web.Optimization;

namespace IMACwebapp.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new Bundle("~/bundles/templates", new HandlebarsTransformer())
                .IncludeDirectory("~/Scripts/App/templates", "*.hbs", true)
            );

            BundleTable.EnableOptimizations = true;

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/vendor/jquery/jquery-2.0.2.min.js")
            );

            bundles.Add(new ScriptBundle("~/bundles/ember")
                .Include("~/Scripts/vendor/handlebars/handlebars-v1.3.0.js")
                .Include("~/Scripts/vendor/ember/ember.js")
                .Include("~/Scripts/vendor/ember/ember-data.js")
                .Include("~/Scripts/vendor/ember/ember-simple-auth-0.7.1.js")
                .Include("~/Scripts/vendor/ember/ember-simple-auth-cookie-store-0.7.1.js")
            );

            bundles.Add(new ScriptBundle("~/bundles/plugins")
                .Include("~/Scripts/vendor/bootstrap/bootstrap.min.js")
                .Include("~/Scripts/vendor/plugins/I18n.js")
                .Include("~/Scripts/vendor/plugins/jquery.easing.min.js")
                .Include("~/Scripts/vendor/plugins/modernizr-2.7.2.js")
                .Include("~/Scripts/vendor/plugins/select2.min.js")
                .Include("~/Scripts/vendor/plugins/bootstrap-datepicker.js")
                .Include("~/Scripts/vendor/plugins/datatables/js/jquery-dataTables.min.js")
                .Include("~/Scripts/vendor/plugins/datatables/js/jquery-dataTables-rowGrouping.js")
                .Include("~/Scripts/vendor/plugins/bootstrap-growl.min.js")
                .Include("~/Scripts/vendor/bootstrap/jquery.bootpag.min.js")
                .Include("~/Scripts/vendor/plugins/moment.js")
                .Include("~/Scripts/vendor/plugins/moment-timezone.js")
                //.Include("~/Scripts/vendor/adminLTE/app.js")
                .Include("~/Scripts/vendor/signalr/jquery.signalR-2.2.0.min.js")

              .Include("~/Scripts/vendor/plugins/fileupload/jquery.fileupload.js")
              .Include("~/Scripts/vendor/plugins/fileupload/vendor/jquery.ui.widget.js")
              .Include("~/Scripts/vendor/plugins/fileupload/jquery.fileupload-process.js")
              .Include("~/Scripts/vendor/plugins/fileupload/jquery.fileupload-validate.js")
        
              .Include("~/Scripts/vendor/plugins/fileupload/jquery.fileupload-image.js")
              .Include("~/Scripts/vendor/plugins/fileupload/jquery.fileupload-audio.js")
              .Include("~/Scripts/vendor/plugins/fileupload/jquery.fileupload-video.js")

              .Include("~/Scripts/vendor/plugins/fileupload/jquery.iframe-transport.js")
              .Include("~/Scripts/vendor/plugins/fileupload/cors/jquery.xdr-transport.js")

              .Include("~/Scripts/vendor/plugins/charts/Chart.min.js")
        );

            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include("~/Scripts/app.js")
                .Include("~/Scripts/app/router.js")
                .Include("~/Scripts/app/locale/en.js")
                .IncludeDirectory("~/Scripts/app/mixins", "*.js", true)
                .IncludeDirectory("~/Scripts/app/bcommon", "*.js", true)
                .IncludeDirectory("~/Scripts/app/models", "*.js", true)
                .IncludeDirectory("~/Scripts/app/controllers", "*.js", true)
                .IncludeDirectory("~/Scripts/app/views", "*.js", true)
                .IncludeDirectory("~/Scripts/app/components", "*.js", true)
                .IncludeDirectory("~/Scripts/app/routes", "*.js", true)
                .IncludeDirectory("~/Scripts/app/helpers", "*.js", true)
                .IncludeDirectory("~/Scripts/app/simpleauth", "*.js", true)
            );
        }
    }
}