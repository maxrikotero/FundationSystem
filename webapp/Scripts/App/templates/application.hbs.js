var application = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿<div class=\"wrapper\">\r\n    "
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "systemheader", {"name":"partial","hash":{},"data":data})))
    + "\r\n    "
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "sidemenu", {"name":"partial","hash":{},"data":data})))
    + "\r\n    <div class=\"content-wrapper\" style=\"min-height: 566px;\">\r\n        "
    + escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, (depth0 != null ? depth0.main : depth0), {"name":"outlet","hash":{},"data":data})))
    + "\r\n    </div>\r\n</div>\r\n    "
    + escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, (depth0 != null ? depth0.login : depth0), {"name":"outlet","hash":{},"data":data})))
    + "\r\n"
    + escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "spinner", {"name":"partial","hash":{},"data":data})))
    + "\r\n"
    + escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, (depth0 != null ? depth0.modal : depth0), {"name":"outlet","hash":{},"data":data})))
    + "\r\n"
    + escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, (depth0 != null ? depth0.modalmodal : depth0), {"name":"outlet","hash":{},"data":data})));
},"useData":true});