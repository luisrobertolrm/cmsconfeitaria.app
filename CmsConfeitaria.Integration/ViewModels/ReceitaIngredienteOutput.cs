using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Integration.ViewModels
{
    public class ReceitaIngredienteOutput
    {
        public int Id { get; set; }
        public int ReceitaId { get; set; }
        public int IngredienteId { get; set; }
        public int UnidadeMedidaId { get; set; }
        public double Quantidade { get; set; }
        public DateTime DataCadastro { get; set; }

        public string NomeIngrediente { get; set; }

    }
}
