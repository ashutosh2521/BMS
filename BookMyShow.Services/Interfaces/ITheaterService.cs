using BookMyShow.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Services.Interfaces
{
    interface ITheaterService
    {
        public List<Theatre> GetTheatresBYMovieId(int id);
        public List<Theatre> GetTheatreById(int id);
        public Theatre GetTheatreByIdAndTime(int id, int time);
    }
}
