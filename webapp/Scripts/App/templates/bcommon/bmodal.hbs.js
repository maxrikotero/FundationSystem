var bmodal = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<h4 class=\"modal-title\">";
  stack1 = ((helper = (helper = helpers.titleText || (depth0 != null ? depth0.titleText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"titleText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "&nbsp;&nbsp;<span "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":text-bold isOcupado:text-light-blue:text-green")
  },"data":data})))
    + "class=\"text-bold text-light-blue\">";
  stack1 = ((helper = (helper = helpers.titleStatus || (depth0 != null ? depth0.titleStatus : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"titleStatus","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span></h4>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <h4 class=\"modal-title\">";
  stack1 = ((helper = (helper = helpers.titleText || (depth0 != null ? depth0.titleText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"titleText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h4>\r\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "        <div class=\"modal-footer\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showCancelButton : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showSaveButton : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showAltaButton : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showAdmisionaButton : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "            <button type=\"button\" class=\"btn btn-default\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "cancel", (depth0 != null ? depth0.view : depth0), {"name":"action","hash":{},"data":data})))
    + ">";
  stack1 = ((helper = (helper = helpers.cancelButtonText || (depth0 != null ? depth0.cancelButtonText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"cancelButtonText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\r\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "            <button type=\"button\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'disabled': ((depth0 != null ? depth0.saveButtonDisabled : depth0)),
    'class': (":btn isDanger:btn-danger:btn-primary")
  },"data":data})))
    + " "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "confirm", (depth0 != null ? depth0.view : depth0), {"name":"action","hash":{},"data":data})))
    + ">";
  stack1 = ((helper = (helper = helpers.saveButtonText || (depth0 != null ? depth0.saveButtonText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"saveButtonText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\r\n";
},"12":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <button type=\"button\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":btn :btn-default")
  },"data":data})))
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "alta", (depth0 != null ? depth0.view : depth0), {"name":"action","hash":{},"data":data})))
    + ">\r\n                <i class=\"fa fa-calendar-times-o\"></i>&nbsp;&nbsp;Alta\r\n            </button>\r\n";
},"14":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "            <button type=\"button\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":btn :btn-default")
  },"data":data})))
    + "  "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "admision", (depth0 != null ? depth0.view : depth0), {"name":"action","hash":{},"data":data})))
    + "><i class=\"fa fa-calendar-plus-o\"></i>&nbsp;&nbsp;Admisión</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "﻿<div class=\"modal-dialog\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'id': ("view.modalDialogId")
  },"data":data})))
    + ">\r\n    <div class=\"modal-content\">\r\n        <div "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': ("showHeaderBlue:modal-header-border-blue:modal-header")
  },"data":data})))
    + ">\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showCloseButton : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showTitleStatus : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\r\n        <div class=\"modal-body\">\r\n            "
    + escapeExpression(((helper = (helper = helpers['yield'] || (depth0 != null ? depth0['yield'] : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"yield","hash":{},"data":data}) : helper)))
    + "\r\n        </div>\r\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.hideFooter : depth0), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n</div>";
},"useData":true});