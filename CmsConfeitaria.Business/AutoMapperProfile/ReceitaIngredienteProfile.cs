using AutoMapper;
using CmsConfeitaria.Core.Entity;
using CmsConfeitaria.Integration.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CmsConfeitaria.Business.AutoMapperProfile
{
    public class ReceitaIngredienteProfile : Profile
    {
        public ReceitaIngredienteProfile()
        {
            CreateMap<ReceitaIngrediente, ReceitaIngredienteOutput>(MemberList.None)
            .ForMember(x => x.NomeIngrediente, cfg => cfg.MapFrom(src => src.ingrediente.Nome))
            .ReverseMap();
        }
    }
}
