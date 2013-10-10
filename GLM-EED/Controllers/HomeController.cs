using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GLM_EED.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "";
            if (!Request.IsAuthenticated)
            {
                return RedirectToAction("Login", "Account");
            }
            return View();
        }

        public ActionResult MenuLunch()
        {
            ViewBag.Message = "";
            if (!Request.IsAuthenticated)
            {
                return RedirectToAction("Home", "Menu");
            }
            return View();
        }

    }
}
