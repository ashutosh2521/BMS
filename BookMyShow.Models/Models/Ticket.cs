using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Models.Models
{
    public class Ticket
            {
                public int Id { get; set; }
                public int TheaterId { get; set; }
                public int MovieId { get; set; }
                public int Time { get; set; }
                public string CustomerName { get; set; }
                public string BookedSeats { get; set; }
            }   
}
