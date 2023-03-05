using CmsConfeitaria.Business;
using CmsConfeitaria.Business.Interfaces;
using CmsConfeitaria.Integration.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CmsConfeitaria.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaIngredienteController : ControllerBase
    {
        private readonly IReceitaIngredienteService _receitaIngredienteService;
        public ReceitaIngredienteController(IReceitaIngredienteService receitaIngredienteService)
        {
            _receitaIngredienteService = receitaIngredienteService;
        }
        [HttpPost("Adicionar")]
        public IActionResult Adicionar(ReceitaIngredienteOutput receitaIngredienteInput)
        {
            _receitaIngredienteService.Adicionar(receitaIngredienteInput);
            return Ok();
        }
        [HttpGet("ObterLista")]
        public IActionResult ObterLista()
        {
            List<ReceitaIngredienteOutput> receitaIngredienteInputs = _receitaIngredienteService.ObterLista();
            return new JsonResult(receitaIngredienteInputs);
        }
        [HttpGet("ObterListaPorReceita/{receitaId}")]
        public IActionResult ObterListaPorReceita(int receitaId)
        {
            List<ReceitaIngredienteOutput> receitaIngredienteInputs = _receitaIngredienteService.ObterReceitaIngredientePorReceita(receitaId);
            return new JsonResult(receitaIngredienteInputs);
        }
        [HttpPost("RemoverReceitaIngrediente")]
        public IActionResult Remover(ReceitaIngredienteOutput receitaIngredienteInput)
        {
            _receitaIngredienteService.Excluir(receitaIngredienteInput);
            return Ok();
        }
    }
}
