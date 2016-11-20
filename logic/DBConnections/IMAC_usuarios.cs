using System.Data.Entity;

namespace logic.DBConnections
{
    public partial class IMAC_usuariosContext : DbContext
    {
        public IMAC_usuariosContext()
            : base("name=IMAC_usuarios")
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        static IMAC_usuariosContext()
        {
            Database.SetInitializer<IMAC_usuariosContext>(null);
        }
    }
}
