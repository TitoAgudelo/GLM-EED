using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;

using GLM_EED.Filters;
using GLM_EED.Models;

namespace GLM_EED.Controllers
{
    [Authorize]
    public class MenuController : Controller
    {
        //
        // GET: /Menu/Home

        [AllowAnonymous]
        public ActionResult Home(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

    }
}
