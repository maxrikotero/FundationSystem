using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace logic.DTOs
{
    public class camas
    {
        public int? Id { get; set; }
        public string Numero { get; set; }
        public bool? isAdultos { get; set; }
        public bool? isPediatria { get; set; }
        public string UnidadNombre { get; set; }
        public DateTime? FechaEliminacion { get; set; }
        public int? EliminadoPor { get; set; }
        public string Observaciones { get; set; }
        public int? CamaId { get; set; }
        public string Identificador { get; set; }
        public DateTime? CamaFechaEliminacion { get; set; }
        public int? CamaEliminadoPor { get; set; }
        public int? UnidadId { get; set; }
        public string Unidad { get; set; }
        public DateTime? UnidadFechaEliminacion { get; set; }
        public int? UnidadEliminadoPor { get; set; }
        public int? EstadoId { get; set; }
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
    }    
}
