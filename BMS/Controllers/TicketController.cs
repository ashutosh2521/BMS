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
    public class TicketController : ControllerBase
    {
        private readonly TicketService _ticketService;
        public TicketController(TicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpGet("get-all-tickets")]
        public IActionResult GetAllTickets()
        {
            var tickets = _ticketService.GetTickets();

            if (tickets == null)
                return NotFound();

            return Ok(tickets);

        }


        [HttpGet("get-ticket/{name}")]
        public IActionResult GetTicketByName(string name)
        {
            var ticket = _ticketService.GetTicket(name);

            return Ok(ticket);

        }


        [HttpPost("add-ticket")]
        public IActionResult AddTicket(Ticket ticket)
        {
            _ticketService.AddTicket(ticket);
            return Ok(ticket);
        }



    }
}
