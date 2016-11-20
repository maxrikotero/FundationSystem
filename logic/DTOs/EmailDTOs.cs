using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace logic.DTOs
{
    public class EmailGet
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool Predeterminado { get; set; }
        public int DisplayOrder { get; set; }
    }

    public class EmailDTO
    {
        public int id { get; set; }
        public int order { get; set; }
        public bool predeterminado { get; set; }
        public bool toRemove { get; set; }
        public string value { get; set; }
    }

    public class EmailDTOReturn : EmailDTO
    {
        public string css { get; set; }
        public string inputId { get; set; }
        public string placeholder { get; set; }
    }
}
