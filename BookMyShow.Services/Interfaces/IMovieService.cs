using BookMyShow.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Services.Interfaces
{
 public  interface IMovieService
    {
        public List<Movie> GetAllMovies();
        public Movie GetMovieById(int id);
    }
}
