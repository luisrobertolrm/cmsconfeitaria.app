using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Business.Interfaces
{
    public interface IReceitaIngredienteService
    {
        public bool Adicionar(ReceitaIngredienteOutput receitaIngredienteInput);
        List<ReceitaIngredienteOutput> ObterLista();
        public bool Excluir(ReceitaIngredienteOutput ReceitaIngredienteInput);
        public List<ReceitaIngredienteOutput> ObterReceitaIngredientePorReceita(int receitaId);
    }
}
