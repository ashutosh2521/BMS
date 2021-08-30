using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Models.ViewModels
{
    class SeatVm
    {
        public int Id { get; set; }
        public string SeatCode { get; set; }
        public int IsBooked { get; set; }
        public int TheaterId { get; set; }
        public int Timing { get; set; }
    }
}
