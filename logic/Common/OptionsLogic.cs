using logic.DBConnections;
using logic.DTOs;
using System.Linq;

namespace logic
{
    public abstract class OptionsLogic
    {
        public static dynamic getTiposDocumento()
        {
            try
            {
                using (var db = new IMAC_sysContext())
                {
                    var result = db.Database.SqlQuerySmart<Option>("usp_IMAC_TiposDocumento_Get").ToList();
                    return result.Select(x => new
                    {
                        id = x.Id,
                        text = x.Texto,
                        description = x.Descripcion
                    });
                }
            }
            catch
            {
                throw;
            }
        }
        public static dynamic getTiposDocumentoAfip()
        {
            try
            {
                using (var db = new IMAC_sysContext())
                {
                    var result = db.Database.SqlQuerySmart<Option>("usp_IMAC_TiposDocumentoAfip_Get").ToList();
                    return result.Select(x => new
                    {
                        id = x.Id,
                        text = x.Texto,
                        description = x.Descripcion
                    });
                }
            }
            catch
            {
                throw;
            }
        }

        public static dynamic getSexos()
        {
            try
            {
                using (var db = new IMAC_sysContext())
                {
                    var result = db.Database.SqlQuerySmart<Option>("usp_IMAC_TipoSexo_Get").ToList();
                    return result.Select(x => new
                    {
                        id = x.Id,
                        text = x.Texto
                    });
                }
            }
            catch
            {
                throw;
            }
        }

        public static dynamic getEstadosCiviles()
        {
            try
            {
                using (var db = new IMAC_sysContext())
                {
                    var result = db.Database.SqlQuerySmart<Option>("usp_IMAC_TipoEstadoCivil_Get").ToList();
                    return result.Select(x => new
                    {
                        id = x.Id,
                        text = x.Texto,
                        description = x.Descripcion
                    });
                }
            }
            catch
            {
                throw;
            }
        }
    }
}
