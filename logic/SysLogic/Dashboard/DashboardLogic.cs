using logic.DBConnections;
using logic.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace logic
{
    public abstract class DashboardLogic
    {
        public static dynamic getModel(Guid userId)
        {
            var result = new IMAC_sysContext().Database.SqlQuerySmart<dashboardDieta>("usp_IMAC_Dashboard_GetModel").ToList();
            var tiposDieta = result.Select(x => x.DietaTipo).Distinct().ToList();
            var obrasSociales = new IMAC_sysContext().Database.SqlQuerySmart<dashboardOSocial>("usp_IMAC_Dashboard_ObraSocialDieta").ToList();
            var admisionesaltas = new IMAC_sysContext().Database.SqlQuerySmart<dashboardAdmisionesAltas>("usp_IMAC_Dashboard_Admisiones_Get").ToList();
            
            var returnValue = new
            {
                dietas = tiposDieta.Select(x => new
                {
                    label = x,
                    value = result.Count(y => y.DietaTipo == x)
                }).ToList(),
                obrasSociales = new
                {
                    labels = new List<string>() { "Días de Internación", "Dietas entregadas", "Días de Internación (Alta)" },//obrasSociales.Select(x => x.ObraSocial).ToList(),
                    datasets = obrasSociales.Select(x => new
                    {
                        label = x.ObraSocial,
                        data = new List<int>() { x.DiasInternacion, x.Dietas, x.DiasAlta }
                    }).ToList()
                },
                admalt = new
                {
                    labels = admisionesaltas.Select(x => x.fecha).ToList(),
                    datasets = admaltDatasets(admisionesaltas)
                },
                admaltdetalle = new
                {
                    labels = admisionesaltas.Select(x => x.fecha).ToList(),
                    datasets = admaltDetalleDatasets(admisionesaltas)
                }
            };
            return returnValue;
        }

        private static dynamic admaltDatasets(List<dashboardAdmisionesAltas> data)
        {
            return new List<dynamic>()
            {
                new
                {
                    label = "Admisiones",
                    data = data.Select(x => x.admisionestotal).ToList()
                },
                new
                {
                    label = "Altas",
                    data = data.Select(x => x.altastotal).ToList()
                }
            };
        }

        private static dynamic admaltDetalleDatasets(List<dashboardAdmisionesAltas> data)
        {
            return new List<dynamic>()
            {
                new
                {
                    label = "Admisiones en Habitaciones",
                    data = data.Select(x => x.admisionespiso).ToList()
                },
                new
                {
                    label = "Admisiones en UTI",
                    data = data.Select(x => x.admisionesuti).ToList()
                },
                new
                {
                    label = "Admisiones en UCO",
                    data = data.Select(x => x.admisionesuco).ToList()
                },
                new
                {
                    label = "Altas de Habitaciones",
                    data = data.Select(x => x.altaspiso).ToList()
                },
                new
                {
                    label = "Altas de UTI",
                    data = data.Select(x => x.altasuti).ToList()
                },
                new
                {
                    label = "Altas de UCO",
                    data = data.Select(x => x.altasuco).ToList()
                }
            };
        }
    }
}
