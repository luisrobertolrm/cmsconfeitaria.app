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
    public class UnidadeMedidaConfiguration : IEntityTypeConfiguration<UnidadeMedida>
    {

        public void Configure(EntityTypeBuilder<UnidadeMedida> builder)
        {
            builder.ToTable("UnidadeMedida");
            builder.HasKey(e => e.Id);
            builder.Property(s => s.Id).HasColumnName("Id");
            builder.Property(s => s.DataCadastro).HasColumnName("DataCadastro");
            builder.Property(s => s.Nome).HasColumnName("Nome");

            builder.HasMany(s => s.ReceitaIngredientes).WithOne(s => s.UnidadeMedida).HasForeignKey(s => s.UnidadeMedidaId);
        }
    }
}
