using BookMyShow.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Services.Interfaces
{
    interface ITicketService
    {
        public Ticket GetTicket(string name);
        public Ticket AddTicket(Ticket ticket);
        public List<Ticket> GetTickets();
    }
}
