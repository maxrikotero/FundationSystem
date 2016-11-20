
using System;
namespace logic.DTOs
{
    public class dashboardDieta
    {
        public DateTime Fecha { get; set; }
        public string Momento { get; set; }
        public string DietaCodigo { get; set; }
        public string DietaTipo { get; set; }
        public string ObraSocial { get; set; }
        public bool Adultos { get; set; }
        public bool Pediatria { get; set; }
    }
    public class dashboardOSocial
    {
        public string ObraSocial { get; set; }
        public int DiasInternacion { get; set; }
        public int Dietas { get; set; }
        public int DiasAlta { get; set; }
    }

    public class dashboardAdmisionesAltas
    {
        public int admisionestotal { get; set; }
        public int admisionespiso { get; set; }
        public int admisionesuco { get; set; }
        public int admisionesuti { get; set; }
        public int altastotal { get; set; }
        public int altaspiso { get; set; }
        public int altasuco { get; set; }
        public int altasuti { get; set; }
        public string fecha { get; set; }
    }
}
