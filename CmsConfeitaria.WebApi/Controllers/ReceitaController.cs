using CmsConfeitaria.Business.Interfaces;
using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace CmsConfeitaria.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceitaController : ControllerBase
    {
        private readonly IReceitaService _receitaService;

        public ReceitaController(IReceitaService receitaService)
        {
            _receitaService = receitaService;
        }

        [HttpPost("Adicionar")]
        public IActionResult Adicionar(ReceitaInput receitaInput)
        {
            _receitaService.Adicionar(receitaInput);
            return Ok();
        }

        [HttpPost("Excluir")]
        public IActionResult Excluir(ReceitaInput receitaInput)
        {
            _receitaService.Excluir(receitaInput);
            return Ok();
        }

        [HttpGet("BuscarLista")]
        public IActionResult RetornarLista()
        {
            List<ReceitaInput> receitaLista = _receitaService.BuscarLista();
            return new JsonResult(receitaLista);
        }

        [HttpGet("RetornarReceitaId")]
        public IActionResult RetornarReceitaPorId(int id)
        {
            Receita receita = _receitaService.BuscarPorId(id);
            return new JsonResult(receita);
        }
        [HttpGet("RetornarReceitaNome")]
        public IActionResult RetornarReceitaPorNome(string nome)
        {
            ReceitaInput receita = _receitaService.BuscarReceitaPorNome(nome);
            return new JsonResult(receita);
        }
        [HttpGet("RetornarReceitasPorIngrediente")]
        public IActionResult RetornarReceitasPorIngrediente(string Ingrediente)
        {
            List<ReceitaInput> receita = _receitaService.BuscarReceitaPorIngredientes(Ingrediente);
            return new JsonResult(receita);
        }
    }
}

