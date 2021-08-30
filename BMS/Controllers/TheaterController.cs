using BookMyShow.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TheaterController:ControllerBase
    {
        private readonly TheaterService _theaterService;
        public TheaterController(TheaterService theaterService)
        {
            _theaterService = theaterService;
        }


        [HttpGet("get-theatre-by-movie-id/{id}")]
        public IActionResult GetTheatresByMovieId(int id)
        {
            var theatres = _theaterService.GetTheatresBYMovieId(id);

            if (theatres == null)
                return NotFound();

            return Ok(theatres);
        }


        [HttpGet("get-theatre-by-theatre-id/{id}")]
        public IActionResult GetTheatreByTheatreId(int id)
        {
            var theatre = _theaterService.GetTheatreById(id);

            if (theatre == null)
                return NotFound();

            return Ok(theatre);
        }


        [HttpGet("get-theatre-by-theatre-id-and-time/{id}/{time}")]
        public IActionResult GetTheatreByTheatreId(int id,int time)
        {
            var theatre = _theaterService.GetTheatreByIdAndTime(id,time);

            if (theatre == null)
                return NotFound();

            return Ok(theatre);
        }
    }
}
