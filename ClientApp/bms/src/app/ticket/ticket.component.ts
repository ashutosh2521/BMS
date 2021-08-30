import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../model/movie-model';
import { Seat } from '../model/seat-model';
import { MovieServiceService } from '../services/movie-service.service';
import { TheatreServiceService } from '../services/theatre-service.service';
import { TicketServiceService } from '../services/ticket-service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  Theatre:any;
  movieBooked : any;
  SeatsBooked:any;
  timing : any;
  bookerName :string ="";

  constructor(private route : ActivatedRoute,private router : Router,private movieService : MovieServiceService,private theatreService : TheatreServiceService,private ticketService: TicketServiceService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      let movieId = params.get('movieId');

      if(movieId != null)
              this.movieService.getMovieById(+movieId).subscribe(res => this.movieBooked = res);

      let theatreId  = params.get('theatreId');

      this.route.queryParams.subscribe(res => this.timing = res.timing);

      if(theatreId != null)
            this.theatreService.getTheatreByIdAndTime(+theatreId,this.timing).subscribe(res => {this.Theatre = res});


       this.bookerName =  this.ticketService.getBookerName();
       this.SeatsBooked = this.ticketService.getSelectedSeats();



    });

  }

}
