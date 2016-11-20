using System;
namespace logic.DTOs
{
    public class HUC : SelectItem
    {
        public string huId { get; set; }
        public string huNombre { get; set; }
        public bool canBlock { get; set; }
    }

    public class AdmisionSet
    {
        public bool bloqueo { get; set; }
        public int cama { get; set; }
        public string observaciones { get; set; }
        public int paciente { get; set; }
        public int osocial { get; set; }
        public Guid userid { get; set; }
        public int patologia { get; set; }
    }

    public class AltaSet
    {
        public int camaId { get; set; }
        public Guid userId { get; set; }
    }

    public class dietaEdit
    {
        public int camaPacienteId { get; set; }
        public int momentoId { get; set; }
        public int tipoId { get; set; }
        public Guid userId { get; set; }
        //public int dietaId { get; set; }
        //public int? dietaMomentoId { get; set; }
        //public int camaId { get; set; }
        //public int momentoId { get; set; }
        //public Guid userId { get; set; }
        //public int tipoId { get; set; }
    }

    public class alimentacionGet
    {
        public int CamaPacienteId { get; set; }
        public int CamaId { get; set; }
        public string Unidad { get; set; }
        public bool isHabitacion { get; set; }
        public string Habitacion { get; set; }
        public string Cama { get; set; }
        public int PacienteId { get; set; }
        public string Paciente { get; set; }
        public string Sexo { get; set; }
        public int? ddmId { get; set; }
        public int? dId { get; set; }
        public int dmId { get; set; }
        public string dTexto { get; set; }
        public string dDietaMomento { get; set; }
        public DateTime? dFecha { get; set; }
        public string dType { get; set; }
        public bool dIsBlocked { get; set; }
        public bool dIsDelivered { get; set; }
        public int? tipoId { get; set; }
    }

    public class actionDM
    {
        public int dmId { get; set; }
        public string action { get; set; }
        public Guid userid { get; set; }
    }

    public class CamaPacienteObservacion : TimelineItem
    {
        public int Id { get; set; }
        public int CamaPacienteId { get; set; }
    }

    public class HistoriaClinicaItem : TimelineItem
    {
        public int Type { get; set; }
    }

    public class CamaPacienteObsPost : ObsPost
    {
        public int CamaPacienteId { get; set; }
    }

    public class CamaRotacion : SelectItem
    {
        public int? habitacionId { get; set; }
    }

    public class RotacionSet
    {
        public int camaSource { get; set; }
        public int camaTarget { get; set; }
        public Guid userId { get; set; }
    }
}