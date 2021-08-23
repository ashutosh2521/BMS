using AutoMapper;
using BookMyShow.Models.Models;
using BookMyShow.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Models.AutoMapperProfile
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<MovieVm, Movie>();
            CreateMap<List<MovieVm>, List<Movie>>();
            CreateMap<Movie, MovieVm>();

        }
    }
}
