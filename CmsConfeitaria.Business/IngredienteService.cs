using AutoMapper;
using CmsConfeitaria.Business.Interfaces;
using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration;
using CmsConfeitaria.Integration.ViewModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Business
{
    public class IngredienteService : IIngredienteService
    {
        private readonly DBContextCm _context;
        private readonly IMapper _mapper;
        public IngredienteService(DBContextCm context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public bool Adicionar(IngredienteInput ingredienteInput)
        {
            Ingrediente ingrediente = _mapper.Map<Ingrediente>(ingredienteInput);

            if (!_context.Ingrediente.Any(x => x.Nome.ToLower() == ingrediente.Nome.ToLower()))
            {
                if (ingrediente.Id == 0)
                {
                    _context.Ingrediente.Add(ingrediente);
                    _context.SaveChanges();
                    return true;
                }
                else
                {
                    _context.Ingrediente.Update(ingrediente);
                    _context.SaveChanges();
                    return true;
                }
            }
            else
                throw new Exception("nome já existente");
                
               
        }

        public List<IngredienteInput> BuscarLista()
        {
           IEnumerable<Ingrediente> ListaIngredientes = _context.Ingrediente.AsEnumerable();
            List<IngredienteInput> ListaIngredientesInput = _mapper.Map<List<IngredienteInput>>(ListaIngredientes);
            return ListaIngredientesInput;
        }

        public bool Excluir(IngredienteInput ingredienteInput)
        {
            Ingrediente ingrediente = _mapper.Map<Ingrediente>(ingredienteInput);
            _context.Ingrediente.Remove(ingrediente);
            _context.SaveChanges();
            return true;
        }
    }
}
