using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Core.Entity
{
    public class UnidadeMedida
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sigla { get; set; }
        public DateTime DataCadastro { get; set; }

        public List<Compra> Compras { get; set; }
        public List<ReceitaIngrediente> ReceitaIngredientes { get; set; }
    }
}
