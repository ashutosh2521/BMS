using BookMyShow.Models.Models;
using BookMyShow.Services.Data;
using BookMyShow.Services.Interfaces;
using PetaPoco.NetCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Services.Services
{
    public class TicketService : ITicketService
    {
        private readonly Database _db;
     
        public TicketService( Database db)
        {
            _db = db;
            
        }


        public Ticket GetTicket(string name)
        {
          
         return _db.Query<Ticket>("SELECT * FROM Tickets WHERE CustomerName =@name", new { name }).SingleOrDefault();
        
        }


        public Ticket AddTicket(Ticket ticket)
        {
        
             _db.Insert("Tickets", "Id", ticket);
            return ticket;
        }

        public List<Ticket> GetTickets()
        {
            return _db.Query<Ticket>("SELECT * FROM TICKETS").ToList();
        }

       }
}
