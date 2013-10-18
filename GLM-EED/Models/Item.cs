using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GLM_EED.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UrlPhoto { get; set; }
        public string Count { get; set; }
        public string Category { get; set; }
        public bool Status { get; set; }
    }
}