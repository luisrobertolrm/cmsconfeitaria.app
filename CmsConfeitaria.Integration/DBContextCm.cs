using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Integration
{
    // 
    public class DBContextCm:DbContext
    {
        public DBContextCm(DbContextOptions options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //var configuration = new ConfigurationBuilder()
            //               .SetBasePath(Directory.GetCurrentDirectory())
            //               .AddJsonFile("appsettings.json")
            //               .Build();

            //var connectionString = configuration.GetConnectionString("DAF");

            base.OnConfiguring(optionsBuilder);
        }

        public DbSet<Teste> Teste { get; set; }
        public DbSet<UnidadeMedida> UnidadeMedida { get; set; }
        public DbSet<ReceitaIngrediente> ReceitaIngrediente { get; set; }
        public DbSet<Ingrediente> Ingrediente { get; set; }
        public DbSet<Receita> Receita { get; set; }
        public DbSet<Compra> Compra { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TesteConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}
