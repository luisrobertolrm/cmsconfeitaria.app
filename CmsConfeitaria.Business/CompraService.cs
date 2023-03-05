using AutoMapper;
using CmsConfeitaria.Business.Interfaces;
using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration;
using CmsConfeitaria.Integration.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Business
{
    public class CompraService : ICompraService
    {
        private readonly DBContextCm _context;
        private readonly IMapper _mapper;
        public CompraService(DBContextCm dBContext,IMapper mapper)
        {
            _context = dBContext;
            _mapper = mapper;
        }

        public bool adicionar(CompraInput compraInput)
        {
            Compra compra = _mapper.Map<Compra>(compraInput);

            if(compra.Id == 0)
            {
                _context.Compra.Add(compra);
                _context.SaveChanges();
                return true;
            }
            else
            {
                _context.Compra.Update(compra);
                _context.SaveChanges();
                return true;
            }
        }

        public bool excluir(CompraInput compraInput)
        {
            Compra compra = _mapper.Map<Compra>(compraInput);
            _context.Compra.Remove(compra);
            _context.SaveChanges();
            return true;
        }

        public List<CompraInput> GetLista()
        {
           IEnumerable<Compra> enumerableCompra = _context.Compra.AsEnumerable();
           List<CompraInput> listaCompra = _mapper.Map<List<CompraInput>>(enumerableCompra);
           return listaCompra;
        }

        public Compra ObterCompraPorId(int id)
        {
           Compra compra = _context.Compra.Where(x => x.Id == id).FirstOrDefault();
           return compra;
        }
    }
}
