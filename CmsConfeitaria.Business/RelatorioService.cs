using AutoMapper;
using CmsConfeitaria.Business.Interfaces;
using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration;
using CmsConfeitaria.Integration.ViewModels;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace CmsConfeitaria.Business
{
    public class RelatorioService:IRelatorioService
    {
        private readonly DBContextCm _context;
        private readonly IReceitaService _receitaService;
        private readonly ICompraService _compraService;

        public RelatorioService(DBContextCm context, IReceitaService receitaService, ICompraService compraService)
        {
            _context = context;
            _receitaService = receitaService;
            _compraService = compraService;
        }

        public RelatorioReceitaOutput ValorIngredientePorReceita(int receitaId)
        {
            Receita receita = _receitaService.BuscarPorId(receitaId);
            RelatorioReceitaOutput receitaOutput = new RelatorioReceitaOutput();

            receitaOutput.Nome = receita.Nome;
            receitaOutput.ModoPreparo = receita.ModoPreparo;

            foreach (var item in receita.ReceitaIngredientes)
            {
                var ingredienteOutput = new IngredienteOutput();
                ingredienteOutput.NomeIngrediente = item.ingrediente.Nome;
                var ultimaCompra = item.ingrediente.Compras.OrderByDescending(x => x.Id).FirstOrDefault();
                ingredienteOutput.QuantidadeTotal = ultimaCompra.Quantidade;
                var valorPorUnidade = ultimaCompra.Valor/ ultimaCompra.Quantidade;
                ingredienteOutput.QuantidadeReceita = item.Quantidade;
                var valorCalculado = valorPorUnidade * ingredienteOutput.QuantidadeReceita;
                ingredienteOutput.ValorCalculo = valorCalculado;
                receitaOutput.ValorTotalReceita += valorCalculado;

                receitaOutput.IngredienteOutputs.Add(ingredienteOutput);
            }
            
            return receitaOutput;


        }
    }
}
