using CmsConfeitaria.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Integration.Configuration
{
    public class ReceitaIngredienteConfiguration : IEntityTypeConfiguration<ReceitaIngrediente>
    {
        public void Configure(EntityTypeBuilder<ReceitaIngrediente> builder)
        {
            builder.ToTable("ReceitaIngrediente");
            builder.HasKey(e => e.Id);
            builder.Property(s => s.Id).HasColumnName("Id"); 
            builder.Property(s => s.Quantidade).HasColumnName("Qantidade"); 
            builder.Property(s => s.DataCadastro).HasColumnName("DataCadastro");

            builder.HasOne(s => s.ingrediente).WithMany(s => s.ReceitaIngredientes).HasForeignKey(s => s.IngredienteId);
            builder.HasOne(s => s.UnidadeMedida).WithMany(s => s.ReceitaIngredientes).HasForeignKey(s => s.UnidadeMedidaId);
            builder.HasOne(s => s.Receita).WithMany(s => s.ReceitaIngredientes).HasForeignKey(s => s.ReceitaId);
        }
    }
}
