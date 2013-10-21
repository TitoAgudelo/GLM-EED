using System;
using GLM_EED.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GLM_EED.Controllers
{
    public class MenuApiController : ApiController
    {
        Item[] items = new Item[]
        {
            new Item {Id = 1, Name="Papa", UrlPhoto="~/Images/Menu/Items/papa.png", Category="Carbohidratos", Count="Like", Status=true},
            new Item {Id = 2, Name="Yuca", UrlPhoto="~/Images/Menu/Items/yuca.png", Category="Carbohidratos", Count="Like", Status=true},
            new Item {Id = 3, Name="Sopa de pasta", UrlPhoto="~/Images/Menu/Items/sopa_pasta.png", Category="Entradas", Count="Like", Status=true},
            new Item {Id = 4, Name="Carne de res", UrlPhoto="~/Images/Menu/Items/carne_res.png", Category="Proteinas", Count="Like", Status=true},
            new Item {Id = 5, Name="Jugo de maracuya", UrlPhoto="~/Images/Menu/Items/jugo_maracuya.png", Category="Jugos", Count="Like", Status=true},
            new Item {Id = 6, Name="Pollo", UrlPhoto="~/Images/Menu/Items/pollo.png", Category="Proteinas", Count="Like", Status=true},
            new Item {Id = 7, Name="Jugo de Guayaba", UrlPhoto="~/Images/Menu/Items/jugo_guayaba.png", Category="Jugos", Count="Like", Status=true},
            new Item {Id = 8, Name="Ensalada", UrlPhoto="~/Images/Menu/Items/especial.png", Category="Vegetales", Count="Like", Status=true}
        };

        [HttpGet]
        public IEnumerable<Item> GetAllItem()
        {
            return items;
        }

        [HttpGet]
        public Item GetItemByCategory(String category)
        {
            var item = items.FirstOrDefault((p) => p.Category == category);
            if (item == null)
                return null;
            else
                return item;
        }
    }
}
