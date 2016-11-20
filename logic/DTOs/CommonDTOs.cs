using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace logic.DTOs
{
    public class setResult
    {
        public string Status { get; set; }
        public string Operation { get; set; }
        public string Message { get; set; }
        public int? Id { get; set; }
    }

    public class setResultGuid
    {
        public string Status { get; set; }
        public string Operation { get; set; }
        public string Message { get; set; }
        public Guid? Id { get; set; }
    }

    public class SelectItem
    {
        public int id { get; set; }
        public string text { get; set; }
        public string description { get; set; }
        public bool? disabled { get; set; }
    }

    public class TimelineItem
    {
        public DateTime Fecha { get; set; }
        public string Texto { get; set; }
        public Guid UserId { get; set; }
        public string Usuario { get; set; }
        public string UsuarioPicture { get; set; }
        public string Description { get; set; }
    }

    public class ObsPost
    {
        public string Text { get; set; }
        public Guid UserId { get; set; }
    }

    public class Telefono
    {
        public int? id { get; set; }
        public int tipo { get; set; }
        public int pais { get; set; }
        public string ddi { get; set; }
        public string ddn { get; set; }
        public string numero { get; set; }
        public string interno { get; set; }
        public string observaciones { get; set; }
    }

    public class TelefonoSet : Telefono
    {
        public Guid? userid { get; set; }

    }

    public class TelefonoPersonaSet
    {
        public int? id { get; set; }
        public int tipo { get; set; }
        public int pais { get; set; }
        public string ddi { get; set; }
        public string ddn { get; set; }
        public string numero { get; set; }
        public string interno { get; set; }
        public string observaciones { get; set; }
        public bool? isNew { get; set; }
        public bool? isEdit { get; set; }
        public bool? toDelete { get; set; }
        public bool? isNewTipo { get; set; }
        public bool? isNewPais { get; set; }
        public string tipoTexto { get; set; }
        public string paisNombre { get; set; }
    }

    public class TelefonoGet : Telefono
    {
        public string tipoTexto { get; set; }
        public string paisNombre { get; set; }
        public bool predeterminado { get; set; }
    }

    public class Domicilio
    {
        public int? id { get; set; }
        public int tipo { get; set; }
        public string domicilio { get; set; }
        public string calle { get; set; }
        public string numero { get; set; }
        public string piso { get; set; }
        public string departamento { get; set; }

    }

    public class DomicilioGet : Domicilio
    {
        public string tipoTexto { get; set; }
        public int pais { get; set; }
        public string paisNombre { get; set; }
        public int provincia { get; set; }
        public string provinciaNombre { get; set; }
        public int localidad { get; set; }
        public string localidadNombre { get; set; }
        public int barrio { get; set; }
        public string barrioNombre { get; set; }
        public string localidadText { get; set; }
        public string codigoPostal { get; set; }
    }

    public class DomicilioPersonaSet
    {
        public int? id { get; set; }
        public int tipo { get; set; }
        public int pais { get; set; }
        public int provincia { get; set; }
        public int localidad { get; set; }
        public int barrio { get; set; }
        public string numero { get; set; }
        public string departamento { get; set; }
        public string piso { get; set; }
        public string calle { get; set; }
        public string codigoPostal { get; set; }
        public string observaciones { get; set; }
        public bool? isNew { get; set; }
        public bool? isEdit { get; set; }
        public bool? toDelete { get; set; }
        public bool? isNewTipo { get; set; }
        public bool? isNewPais { get; set; }
        public bool? isNewProvincia { get; set; }
        public bool? isNewLocalidad { get; set; }
        public bool? isNewBarrio { get; set; }
        public string tipoTexto { get; set; }
        public string paisNombre { get; set; }
        public string provinciaNombre { get; set; }
        public string localidadNombre { get; set; }
        public string barrioNombre { get; set; }
    }

    public class DomicilioSet : DomicilioPersonaSet
    {
        public Guid? userid { get; set; }
    }
}
