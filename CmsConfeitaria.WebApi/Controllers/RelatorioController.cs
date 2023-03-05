using CmsConfeitaria.Business;
using CmsConfeitaria.Business.Interfaces;
using CmsConfeitaria.Integration.ViewModels;
using FastReport;
using FastReport.Export.PdfSimple;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CmsConfeitaria.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelatorioController : ControllerBase
    {
        private readonly IRelatorioService _service;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IReceitaService _receitaService;
        public RelatorioController(IRelatorioService service, IWebHostEnvironment webHostEnvironment,IReceitaService receitaService)
        {
            _service = service;
            _webHostEnvironment = webHostEnvironment;
            _receitaService = receitaService;
        }

        [HttpPost("ValorIngredientePorReceita")]
        public RelatorioReceitaOutput ValorIngredientePorReceita(int ReceitaId)
        {
            RelatorioReceitaOutput ValorIngredientePorReceita = _service.ValorIngredientePorReceita(ReceitaId);
            return ValorIngredientePorReceita;
        }

        [HttpGet("Relatorio")]
        public IActionResult Relatorio(int ReceitaId) 
        {
            var receita = _receitaService.BuscarPorId(ReceitaId);
            

            RelatorioReceitaOutput receitaRelatorio = _service.ValorIngredientePorReceita(receita.Id);
 

            var reportFile = Path.Combine(this._webHostEnvironment.ContentRootPath, @"Relatorio\Report.frx");
            var report = new FastReport.Report();
            report.Load(reportFile);
            report.Report.SetParameterValue("NomeReceita", receita.Nome);
            report.Report.SetParameterValue("ModoPreparo", receita.ModoPreparo);
            report.Report.SetParameterValue("ValorTotalReceita", receitaRelatorio.ValorTotalReceita);
            report.Report.Dictionary.RegisterBusinessObject(receitaRelatorio.IngredienteOutputs, "ingrediente", 30, true);
            report.Report.Prepare();

            var pdfExport = new PDFSimpleExport();

            using (MemoryStream ms = new MemoryStream())
            {
                pdfExport.Export(report, ms);
                return new FileStreamResult(new MemoryStream(ms.ToArray()), "application/pdf");
            }
        }


    }
}
