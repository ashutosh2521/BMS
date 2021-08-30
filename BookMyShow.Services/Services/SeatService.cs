using BookMyShow.Models.Models;
using BookMyShow.Services.Interfaces;
using PetaPoco.NetCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Services.Services
{
 public class SeatService : ISeatService
    {
        private readonly Database _db;

        public SeatService(Database db)
        {
            _db = db;
        }


        public List<Seat> GetSeatsByTheatreIdAndTime(int theatreId,int time)
        {
            return _db.Query<Seat>("SELECT * FROM Seats WHERE TheaterId =@theatreId AND Timing =@time", new { theatreId, time }).ToList(); 
        }


        public void UpdateSelectedSeats(List<Seat> seats)
        {
            
            for (int i = 0; i < seats.Count; i++)
            {
                var rec = _db.FirstOrDefault<Seat>("WHERE ID = @0", seats[i].Id);
                rec.IsBooked = seats[i].IsBooked;
                _db.Update(rec);
            }
          
        }
    }
}
