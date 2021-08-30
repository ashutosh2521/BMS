using PetaPoco.NetCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookMyShow.Models.Models
{  
    [TableName("Seats")]
    public class Seat
        {
        public int Id { get; set; }
        public string SeatCode { get; set; }
        public int IsBooked { get; set; }
        public int TheaterId { get; set; }
        public int Timing { get; set; }

    }
}
