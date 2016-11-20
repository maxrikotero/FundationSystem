using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace webapi.Controllers
{
    [RoutePrefix("imac/options")]
    public class OptionsController : ApiController
    {
        [Route("gettiposdocumentos")]
        [AcceptVerbs("GET")]
        public dynamic getTiposDocumentos()
        {
            return logic.OptionsLogic.getTiposDocumento();
        }

        [Route("gettiposdocumentosafip")]
        [AcceptVerbs("GET")]
        public dynamic getTiposDocumentosAfip()
        {
            return logic.OptionsLogic.getTiposDocumentoAfip();
        }

        [Route("getsexos")]
        [AcceptVerbs("GET")]
        public dynamic getSexos()
        {
            return logic.OptionsLogic.getSexos();
        }

        [Route("getestadosciviles")]
        [AcceptVerbs("GET")]
        public dynamic getEstadosCiviles()
        {
            return logic.OptionsLogic.getEstadosCiviles();
        }
    }
}
