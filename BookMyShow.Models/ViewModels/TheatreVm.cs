using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Models.ViewModels
{
    class TheatreVm
    {
        public int Id { get; set; }
        public int TheatreId { get; set; }
        public int MovieId { get; set; }
        public int Timing { get; set; }
        public string TheatreName { get; set; }
    }
}
