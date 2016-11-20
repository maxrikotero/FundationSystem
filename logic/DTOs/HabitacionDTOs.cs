
using System;
namespace logic.DTOs
{
    public class HabitacionGet
    {
        public int? Id { get; set; }
        public int UnidadId { get; set; }
        public string ClassHabUnd { get; set; }
        public string UnidadNombre { get; set; }
        public int UDisplayOrder { get; set; }
        public string Numero { get; set; }
        public bool? isAdultos { get; set; }
        public bool? isPediatria { get; set; }
        public string Observaciones { get; set; }
        public int? CantidadCamas { get; set; }
        public string ObraSocial { get; set; }
        public int? CamasDisponibles { get; set; }
        public int CamaId { get; set; }
        public string Identificador { get; set; }
        public int? PacienteId { get; set; }
        public string PacienteNombre { get; set; }
        public string PacienteSexo { get; set; }
        public string EstadoCama { get; set; }
        public bool isDisponible { get; set; }
        public bool isOcupada { get; set; }
        public bool isBloqueada { get; set; }
        public bool? isAislada { get; set; }
    }

    public class HabitacionGetById
    {
        public int Id { get; set; }
        public string Numero { get; set; }
        public bool? isAdultos { get; set; }
        public bool? isPediatria { get; set; }
        public DateTime? FechaEliminacion { get; set; }
        public int? EliminadoPor { get; set; }
        public string Observaciones { get; set; }
        public int CamaId { get; set; }
        public string Identificador { get; set; }
        public DateTime? CamaFechaEliminacion { get; set; }
        public int? CamaEliminadoPor { get; set; }
        public int UnidadId { get; set; }
        public string Unidad { get; set; }
        public DateTime? UnidadFechaEliminacion { get; set; }
        public int? UnidadEliminadoPor { get; set; }
        public int EstadoId { get; set; }
        public string Estado { get; set; }
        public int? PacienteId { get; set; }
        public string PacienteNombre { get; set; }
        public string PacienteApellido { get; set; }
        public string PacienteSexo { get; set; }
        public string PacienteTipoDocumentoShort { get; set; }
        public string PacienteDocumento { get; set; }
        public DateTime? PacienteFechaNacimiento { get; set; }
        public string PacienteEstadoCivil { get; set; }
        public int? PacienteOSocialId { get; set; }
        public string PacienteOSocial { get; set; }
        public string PacienteNroAfiliado { get; set; }
        public DateTime? PacienteFechaVigencia { get; set; }
        public int? CamaPacienteId { get; set; }
        public string Patologia { get; set; }
        public string DescripcionPatologia { get; set; }
        public bool bloqueoHabitacion { get; set; }
        public string DocumentoAFIP { get; set; }
        public string PersonaNacionalidad { get; set; }
        public string TipoDocumentoAFIP { get; set; }
    }

    public class TipoDieta
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Texto { get; set; }
    }
}
