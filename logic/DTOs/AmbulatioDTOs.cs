
using System;
namespace logic.DTOs
{
    public class AmbulatorioGet
    {
        public int Id { get; set; }
        public DateTime FechaAdmision { get; set; }
        public int IdMedico { get; set; }
        public int IdPaciente { get; set; }
        public int IdObraSocial { get; set; }
        public int IdPatologia { get; set; }
        public string Medico { get; set; }
        public string Paciente { get; set; }
        public string ObraSocial { get; set; }
        public string NroAfiliado { get; set; }
        public DateTime ObraSocialFechaVigencia { get; set; }
        public string Patologia { get; set; }
        public string PatologiaDescripcion { get; set; }
        public string classPaciente { get; set; }
        public string classMedico { get; set; }
    }

    public class AmbulatorioSet
    {
        public int medico { get; set; }
        public string observaciones { get; set; }
        public int osocial { get; set; }
        public int paciente { get; set; }
        public int patologia { get; set; }
        public Guid userid { get; set; }
    }

    public class AmbulatorioGetById
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public DateTime? FechaAlta { get; set; }
        public int IdPaciente { get; set; }
        public int IdMedico { get; set; }
        public int IdPatologia { get; set; }
        public bool isEnEspera { get; set; }
        public string Patologia { get; set; }
        public string DescripcionPatologia { get; set; }
    }

    public class AmbulatorioObservacion : TimelineItem
    {
        public int Id { get; set; }
        public int AmbulatorioId { get; set; }
    }

    public class AmbulatorioObsPost : ObsPost
    {
        public int AmbulatorioId { get; set; }
    }
}
