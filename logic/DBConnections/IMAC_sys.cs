using System.Data.Entity;

namespace logic.DBConnections
{
    public partial class IMAC_sysContext : DbContext
    {
        public IMAC_sysContext()
            : base("name=IMAC_sys")
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        static IMAC_sysContext()
        {
            Database.SetInitializer<IMAC_sysContext>(null);
        }
    }
}
