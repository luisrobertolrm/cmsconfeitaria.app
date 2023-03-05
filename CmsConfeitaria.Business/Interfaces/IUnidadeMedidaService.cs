using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Business.Interfaces
{
    public interface IUnidadeMedidaService
    {
        public List<UnidademedidaInput> BuscarLista();
        public bool Adicionar(UnidademedidaInput unidademedidaInput);
        public bool Excluir(UnidademedidaInput unidademedidaInput);
    }
}
