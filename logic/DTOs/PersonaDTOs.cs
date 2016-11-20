using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace logic.DTOs
{
    public class PersonaDTOs
    {
        public int? id { get; set; }
        public string apellido { get; set; }
        public int? estadoCivil { get; set; }
        public DateTime? fechaNacimiento { get; set; }
        public string nombre { get; set; }
        public string nroDocumento { get; set; }
        public string nroDocumentoAfip { get; set; }
        public int? sexo { get; set; }
        public int? tipoDocumento { get; set; }
        public int? tipoDocumentoAfip { get; set; }
        public int? paisId { get; set; }
    }
    #region Paciente
    public class PacienteSet
    {
        public PacienteDTO datos { get; set; }
        public Guid userId { get; set; }
    }
    public class PacienteDelete
    {
        public int id { get; set; }
        public Guid userId { get; set; }
    }
    public class PacienteGet
    {
        public int Id { get; set; }
        public DateTime? PacienteDesde { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Documento { get; set; }
        public string DocumentoAfip { get; set; }
        public int? TipoDocumentoId { get; set; }
        public int? TipoDocumentoAfipId { get; set; }
        public string TipoDocumentoAfip { get; set; }
        public string TipoDocumentoAfipShort { get; set; }
        public string TipoDocumentoShort { get; set; }
        public string TipoDocumento { get; set; }
        public int? EstadoCivilId { get; set; }
        public string EstadoCivil { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public int? Nacionalidad { get; set; }
        public string Pais { get; set; }
        public string Observaciones { get; set; }
        public int? IdSexo { get; set; }
        public string Sexo { get; set; }
        public string OSocial { get; set; }
        public string nAfiliado { get; set; }
        public DateTime? fechaVigencia { get; set; }
    }
    public class AdmisionPacienteGet : PacienteGet
    {
        public int? OSocialId { get; set; }
        public string nAfiliado { get; set; }
        public DateTime? fechaVigencia { get; set; }
    }


    public class PacienteDTO : PersonaDTOs
    {
        public int idpersona { get; set; }
        public bool? oSocialHasChanges { get; set; }
        public int? oSocial { get; set; }
        public string nAfiliado { get; set; }
        public DateTime? fechaVigencia { get; set; }
        public List<TelefonoPersonaSet> telefonos { get; set; }
        public List<DomicilioPersonaSet> domicilios { get; set; }
        public List<EmailDTO> emails { get; set; }
    }
    #endregion
    #region Medico

    public class MedicoSet
    {
        public class MedicoDTO : PersonaDTOs
        {
            public string matricula { get; set; }
        }
        public MedicoDTO datos { get; set; }
        public Guid userId { get; set; }
    }

    public class MedicoDelete
    {
        public int id { get; set; }
        public Guid userId { get; set; }
    }

    public class MedicoGet
    {
        public int Id { get; set; }
        public string Matricula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Documento { get; set; }
        public int TipoDocumentoId { get; set; }
        public string TipoDocumentoShort { get; set; }
        public string TipoDocumento { get; set; }
        public int EstadoCivilId { get; set; }
        public string EstadoCivil { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public string Nacionalidad { get; set; }
        public string Observaciones { get; set; }
        public int IdSexo { get; set; }
        public string Sexo { get; set; }
    }

    #endregion
    #region Perfil
    public class PerfilUserSet
    {
        public Guid userId { get; set; }
        public PerfilGetSet perfil { get; set; }
    }
    public class PerfilGetSet
    {
        public int? Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Documento { get; set; }
        public int? TipoDocumentoId { get; set; }
        public int? EstadoCivilId { get; set; }
        public DateTime? FechaNacimiento { get; set; }
        public string Nacionalidad { get; set; }
        public string Observaciones { get; set; }
        public int? IdSexo { get; set; }
        public string Matricula { get; set; }
        public string Picture { get; set; }
    }
    public class PerfilGetEM : PerfilGetSet
    {
        public int? MedicoId { get; set; }
        public int? EmpleadoId { get; set; }
        public bool? isEmpleado { get; set; }
        public bool? isMedico { get; set; }

    }
    public class LoginPerfilGet
    {
        public string Nombre { get; set; }
        public string Picture { get; set; }
    }
    #endregion

    public class PictureSet
    {
        public Guid UserId { get; set; }
        public string FileName { get; set; }
    }

    public class PacienteHistory
    {
        public int personaId { get; set; }
        public DateTime? fechaAlta { get; set; }
        public string patologia { get; set; }
        public string descripcionPatologia { get; set; }
        public DateTime? fechaInternacion { get; set; }
        public string hora { get; set; }
    }

}