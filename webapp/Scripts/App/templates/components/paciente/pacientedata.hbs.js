var pacientedata = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "            <a href=\"javascript:void(0)\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "viewPac", ((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Id : stack1), {"name":"action","hash":{},"data":data})))
    + ">\r\n                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Apellido : stack1), depth0))
    + ",&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Nombre : stack1), depth0))
    + "\r\n            </a>\r\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Apellido : stack1), depth0))
    + ",&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Nombre : stack1), depth0))
    + "\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "<tr>\r\n    <td>Obra Social</td>\r\n    <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.OSocial : stack1), depth0))
    + "</td>\r\n</tr>\r\n<tr>\r\n    <td>N° Afiliado</td>\r\n    <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.nAfiliado : stack1), depth0))
    + "</td>\r\n</tr>\r\n<tr>\r\n    <td>Fecha de Vigencia</td>\r\n    <td>"
    + escapeExpression(((helpers['Moment-Comp'] || (depth0 && depth0['Moment-Comp']) || helperMissing).call(depth0, {"name":"Moment-Comp","hash":{
    'format': ("DD-MM-YYYY"),
    'value': (((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.fechaVigencia : stack1))
  },"data":data})))
    + "</td>\r\n</tr>\r\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.showNoObra : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  return "<tr>\r\n    <td>&nbsp;</td>\r\n    <td class=\"admision-datos-paciente-no-osocial\">\r\n        No se puede completar la admisión<br />El paciente no tiene Obra Social\r\n    </td>\r\n</tr>\r\n";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<tr>\r\n    <td>&nbsp;</td>\r\n    <td class=\"text-right\">\r\n        <button type=\"button\" "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'class': (":btn :btn-primary this.buttonClass")
  },"data":data})))
    + " "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "editPac", ((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Id : stack1), {"name":"action","hash":{},"data":data})))
    + "><span class=\"glyphicon glyphicon-pencil\"></span>&nbsp;&nbsp;Editar Paciente</button>\r\n    </td>\r\n</tr>\r\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<tr>\r\n    <td class=\"padding-top-10\">Patología</td>\r\n    <td class=\"padding-top-10\">\r\n        "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.patologia : depth0)) != null ? stack1.text : stack1), depth0))
    + "\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.patologia : depth0)) != null ? stack1.description : stack1), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </td>\r\n</tr>\r\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        &nbsp;<span style=\"color: #858585;font-size: 0.86em;\">\r\n            "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.patologia : depth0)) != null ? stack1.description : stack1), depth0))
    + "\r\n        </span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "﻿<tr>\r\n    <td>Nombre</td>\r\n    <td>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.viewAction : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </td>\r\n</tr>\r\n<tr>\r\n    <td>Documento</td>\r\n    <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.TipoDocumentoShort : stack1), depth0))
    + "&nbsp;-&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Documento : stack1), depth0))
    + "</td>\r\n</tr>\r\n<tr>\r\n    <td>Documento AFIP</td>\r\n    <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.TipoDocumentoAfip : stack1), depth0))
    + "&nbsp;-&nbsp;"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.DocumentoAfip : stack1), depth0))
    + "</td>\r\n</tr>\r\n<tr>\r\n    <td>Sexo</td>\r\n    <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Sexo : stack1), depth0))
    + "</td>\r\n</tr>\r\n<tr>\r\n    <td>Nacionalidad</td>\r\n    <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.Nacionalidad : stack1), depth0))
    + "</td>\r\n</tr>\r\n<tr>\r\n    <td>Fecha de Nacimiento</td>\r\n    <td>"
    + escapeExpression(((helpers['Moment-Comp'] || (depth0 && depth0['Moment-Comp']) || helperMissing).call(depth0, {"name":"Moment-Comp","hash":{
    'format': ("DD-MM-YYYY"),
    'value': (((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.FechaNacimiento : stack1))
  },"data":data})))
    + "</td>\r\n</tr>\r\n<tr>\r\n    <td>Estado Civil</td>\r\n    <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.EstadoCivil : stack1), depth0))
    + "</td>\r\n</tr>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.paciente : depth0)) != null ? stack1.OSocial : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.editAction : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.patologia : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});