using AutoMapper;
using CmsConfeitaria.Business.Interfaces;
using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration;
using CmsConfeitaria.Integration.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Business
{
    public class ReceitaIngredienteService : IReceitaIngredienteService
    {
        private readonly DBContextCm _context;
        private readonly IMapper _mapper;

        public ReceitaIngredienteService(DBContextCm context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public bool Adicionar(ReceitaIngredienteOutput receitaIngredienteInput)
        {
            ReceitaIngrediente receitaIngrediente = _mapper.Map<ReceitaIngrediente>(receitaIngredienteInput);
            ;
            if (!_context.ReceitaIngrediente.Any(x => x.ReceitaId == receitaIngrediente.ReceitaId && x.IngredienteId == receitaIngrediente.IngredienteId))
            {
                if (receitaIngrediente.Id == 0)
                {
                    _context.ReceitaIngrediente.Add(receitaIngrediente);
                    _context.SaveChanges();
                    return true;
                }
                else
                {
                    _context.ReceitaIngrediente.Update(receitaIngrediente);
                    _context.SaveChanges();
                    return true;
                }
            }
            else
                return false;
        }

        public bool Excluir(ReceitaIngredienteOutput ReceitaIngredienteInput)
        {
            ReceitaIngrediente receitaIngrediente = _mapper.Map<ReceitaIngrediente>(ReceitaIngredienteInput);

            _context.ReceitaIngrediente.Remove(receitaIngrediente);
            _context.SaveChanges();
            return true;
        }

        public List<ReceitaIngredienteOutput> ObterLista()
        {
            IEnumerable<ReceitaIngrediente> receitaIngredientes =  _context.ReceitaIngrediente.AsEnumerable();
            List<ReceitaIngredienteOutput> listaReceitaIngrediente = _mapper.Map<List<ReceitaIngredienteOutput>>(receitaIngredientes);
            return listaReceitaIngrediente;
        }

        public List<ReceitaIngredienteOutput> ObterReceitaIngredientePorReceita(int receitaId)
        {
            IEnumerable<ReceitaIngrediente> listaReceitaIngrediente = _context.ReceitaIngrediente.Where(x => x.ReceitaId == receitaId).Include(x => x.ingrediente).AsEnumerable();
            List<ReceitaIngredienteOutput> listaReceitaIngredienteInput = _mapper.Map<List<ReceitaIngredienteOutput>>(listaReceitaIngrediente);
            return listaReceitaIngredienteInput;
        }
    }
}
