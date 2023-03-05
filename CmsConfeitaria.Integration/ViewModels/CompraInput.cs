using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Integration.ViewModels
{
    public  class CompraInput
    {
        public int Id { get; set; }
        public int IngredienteId { get; set; }
        public int UnidadeMedidaId { get; set; }
        public int Quantidade { get; set; }
        public DateTime DataCompra { get; set; }
        public double Valor { get; set; }
    }
}
