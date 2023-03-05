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
    public class ComrpaProfile : Profile
    {
        public ComrpaProfile()
        {
            CreateMap<Compra, CompraInput>(MemberList.None).ReverseMap();
        }
    }
}
