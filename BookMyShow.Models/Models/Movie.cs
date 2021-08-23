using PetaPoco.NetCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BookMyShow.Models.Models
{
    [TableName("Movies")]
    public class Movie
        {
            public int MovieId { get; set; }
            public string MovieName { get; set; }
            public int Duration { get; set; }
            public int Rating { get; set; }
            public string MovieUrl { get; set; }
            public string Language { get; set; }
            public string DateOfRelease { get; set; }
            public string Genre { get; set; }
            public string Description { get; set; }


        }
    
}
