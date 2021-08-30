using BookMyShow.Models.Models;
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
    public class SeatsController : ControllerBase
    {
        private readonly SeatService _seatService;
        public SeatsController(SeatService seatService)
        {
            _seatService = seatService;
        }


        [HttpGet("get-seats-by-theatre-id/{id}/{time}")]
        public IActionResult GetSeatsByTheatreId(int id,int time)
        {
            var seats = _seatService.GetSeatsByTheatreIdAndTime(id,time);

            if (seats == null)
                return NotFound();

            return Ok(seats);
        }

        [HttpPut("update-seats")]
        public IActionResult UpdateSeats(List<Seat> Selectedseats)
        {
            _seatService.UpdateSelectedSeats(Selectedseats);
            return Ok();
        }
    }
}
