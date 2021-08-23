using AutoMapper;
using BookMyShow.Models.Models;
using BookMyShow.Models.ViewModels;
using BookMyShow.Services.Interfaces;
using BookMyShow.Services.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private MovieService _movieService;
        private readonly IMapper _mapper;
        public MovieController(MovieService movieService, IMapper mapper)
        {
            _movieService = movieService;
            _mapper = mapper;
        }


        [HttpGet("get-all-movies")]
        public IActionResult GetAllMovies()
        {
            var movies = _movieService.GetAllMovies();

            if (movies == null)
                return NotFound();

            return Ok(movies);
           //return Ok(_mapper.Map<List<MovieVm>>(movies));


        }

        [HttpGet("get-movie/{id}")]
        public IActionResult GetMovie(int id)
        {
            var movie = _movieService.GetMovieById(id);

            if (movie == null)
                return NotFound();

            return Ok(_mapper.Map<Movie>(movie));

        }




    }
}
