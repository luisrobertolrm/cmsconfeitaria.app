using CmsConfeitaria.Core.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Integration.Configuration
{
    public class ReceitaConfiguration : IEntityTypeConfiguration<Receita>
    {
        public void Configure(EntityTypeBuilder<Receita> builder )
        {
            builder.ToTable("Receita");
            builder.HasKey(e => e.Id);
            builder.Property(s => s.Id).HasColumnName("Id");
            builder.Property(s => s.ModoPreparo).HasColumnName("ModoPreparo");
            builder.Property(s => s.DataCadastro).HasColumnName("DataCadastro");
            builder.Property(s => s.Nome).HasColumnName("Nome");

            builder.HasMany(s => s.ReceitaIngredientes).WithOne(s => s.Receita).HasForeignKey(s => s.ReceitaId);
        }
    }
}
