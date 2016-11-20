using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace logic.DTOs
{
    public class Option
    {
        public int Id { get; set; }
        public string Texto { get; set; }
        public string Descripcion { get; set; }
        public int? DisplayOrder { get; set; }
    }
}
