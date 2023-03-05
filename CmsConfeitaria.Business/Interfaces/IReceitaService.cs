using CmsConfeitaria.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CmsConfeitaria.Integration.ViewModels;

namespace CmsConfeitaria.Business.Interfaces
{
    public interface IReceitaService
    {
     
            bool Adicionar(ReceitaInput receitaInput);
            bool Excluir(ReceitaInput receitaInput);
            List<ReceitaInput> BuscarLista();
            Receita BuscarPorId(int id);
            ReceitaInput BuscarReceitaPorNome(string nome);
            List<ReceitaInput> BuscarReceitaPorIngredientes(string Ingrediente);

    }

}

