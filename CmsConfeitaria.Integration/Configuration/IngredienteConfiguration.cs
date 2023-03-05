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
    public class IngredienteConfiguration : IEntityTypeConfiguration<Ingrediente>
    {
        public void Configure(EntityTypeBuilder<Ingrediente> builder)
        {
            builder.ToTable("Ingrediente");
            builder.HasKey(e => e.Id);
            builder.Property(s => s.Id).HasColumnName("Id");
            builder.Property(s => s.DataCadastro).HasColumnName("DataCadastro");
            builder.Property(s => s.Nome).HasColumnName("Nome");

            builder.HasMany(s => s.ReceitaIngredientes).WithOne(s => s.ingrediente).HasForeignKey(s => s.IngredienteId);
            builder.HasMany(s => s.Compras).WithOne(s => s.Ingrediente).HasForeignKey(s => s.IngredienteId);
        }
    }
}
