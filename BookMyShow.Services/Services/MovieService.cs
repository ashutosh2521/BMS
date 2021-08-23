using BookMyShow.Models.Models;
using BookMyShow.Services.Data;
using PetaPoco.NetCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Services.Services
{
  public class MovieService
    {
        private readonly ApplicationDbContext _context;
        private readonly Database _db;

        public MovieService(ApplicationDbContext context,Database db)
        {
            _context = context;
            _db = db;
        }

        public List<Movie> GetAllMovies()
        {
            //return _context.Movies.ToList();
            //return _db.Query<Movie>("SELECT * FROM Movies").ToList();
            return _db.Query<Movie>("SELECT * FROM Movies").ToList();
        }


        public Movie GetMovieById(int id)
        {
            //return _context.Movies.SingleOrDefault(c => c.MovieId == id);
            return _db.Query<Movie>("SELECT * FROM Movies WHERE MovieId =" + id).SingleOrDefault();
        }

    }
}
