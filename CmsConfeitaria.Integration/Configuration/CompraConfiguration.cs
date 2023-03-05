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
    public class CompraConfiguration : IEntityTypeConfiguration<Compra>
    {
        public void Configure(EntityTypeBuilder<Compra> builder)
        {
            builder.ToTable("Compra");
            builder.HasKey(e => e.Id);
            builder.Property(s => s.Id).HasColumnName("Id");
            builder.Property(s => s.Quantidade).HasColumnName("Quantidade");
            builder.Property(s => s.DataCompra).HasColumnName("DataCompra");
            builder.Property(s => s.Valor).HasColumnName("Valor");

            builder.HasOne(s => s.Ingrediente).WithMany(s => s.Compras).HasForeignKey(s => s.IngredienteId);
            builder.HasOne(s => s.UnidadeMedida).WithMany(s => s.Compras).HasForeignKey(s => s.UnidadeMedidaId);

        }
    }
}
