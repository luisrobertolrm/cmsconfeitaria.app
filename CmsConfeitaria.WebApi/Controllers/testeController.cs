using CmsConfeitaria.Integration.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CmsConfeitaria.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class testeController : ControllerBase
    {

        private IWebHostEnvironment _webHostEnvironment;

        public testeController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet("report")]
        public ActionResult GenerateModelReport()
        {
            var lst = new List<RelatorioReceitaOutput>();


            var reportFile = Path.Combine(this._webHostEnvironment.ContentRootPath, @"Reports\Demonstrativo\ImpressaoCalculoMovimentoFinanceiro.frx");
            var r = new FastReport.Report();
            r.Report.Dictionary.RegisterBusinessObject(lst, "registros", 10, true);
            r.Report.Save(reportFile);

            return Ok("OK");
        }
    }
}
