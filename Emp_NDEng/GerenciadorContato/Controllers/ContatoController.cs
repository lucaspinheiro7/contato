using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GerenciadorContato.Controllers
{
    public class ContatoController : Controller
    {
        // GET: Contato
        public ActionResult Lista()
        {
            return View();
        }
    }
}