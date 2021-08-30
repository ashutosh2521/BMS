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
        public class TheaterService : ITheaterService
        {
          private readonly Database _db;

            public TheaterService(Database db)
            {
                _db = db;
            }

            public List<Theatre> GetTheatresBYMovieId(int id)
            {
                return _db.Query<Theatre>("SELECT * FROM TheatreTimings WHERE MOVIEID = @id", new { id }).ToList();
            }

            public List<Theatre> GetTheatreById(int id)
            {
                return _db.Query<Theatre>("SELECT * FROM TheatreTimings WHERE TheatreId = @id", new { id }).ToList();
            }

             public Theatre GetTheatreByIdAndTime(int id,int time)
             {
                return _db.Query<Theatre>("SELECT * FROM TheatreTimings WHERE TheatreId = @id AND Timing = @time", new { id, time }).SingleOrDefault();
             }
    }
}
