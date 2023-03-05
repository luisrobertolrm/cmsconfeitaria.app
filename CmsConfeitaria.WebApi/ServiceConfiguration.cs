using CmsConfeitaria.Business;
using CmsConfeitaria.Business.Interfaces;
using System.Runtime.CompilerServices;

namespace CmsConfeitaria.WebApi
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection Configurar(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IReceitaService, ReceitaService>();
            serviceCollection.AddScoped<IIngredienteService, IngredienteService>();
            serviceCollection.AddScoped<IUnidadeMedidaService, UnidadeMedidaService>();
            serviceCollection.AddScoped<IReceitaIngredienteService, ReceitaIngredienteService>();
            serviceCollection.AddScoped<ICompraService, CompraService>();
            serviceCollection.AddScoped<IRelatorioService, RelatorioService>();
            return serviceCollection;
        }

    }
}
