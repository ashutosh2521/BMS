using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Models.ViewModels
{
    class TicketVm
    {
        public int Id { get; set; }
        public int TheaterId { get; set; }
        public int MovieId { get; set; }
        public int Time { get; set; }
        public string CustomerName { get; set; }
        public string BookedSeats { get; set; }
    }
}
