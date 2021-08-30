using BookMyShow.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Services.Interfaces
{
    interface ISeatService
    {
        public List<Seat> GetSeatsByTheatreIdAndTime(int theatreId, int time);
        public void UpdateSelectedSeats(List<Seat> seats);

    }
}
