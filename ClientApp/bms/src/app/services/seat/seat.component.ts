import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seat } from 'src/app/model/seat-model';
import { Theatre } from 'src/app/model/theatre-timing-model';
import { Ticket } from 'src/app/model/ticket-model';
import { SeatServiceService } from '../seat-service.service';
import { TheatreServiceService } from '../theatre-service.service';
import { TicketServiceService } from '../ticket-service.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  numberOfSeats : string = "";
  nameOfUser : string = "";
  isValid : boolean = false;
  Theatre : any;
  Seats : Seat[] = [];
  SeatsSelected: Seat[]  = [];
  price : number = 0;
  movieId : number = 0;
  theatreId : number = 0;
  timing : number = 0;

  constructor(private seatService:SeatServiceService ,private theatreService : TheatreServiceService, private route : ActivatedRoute,private router : Router,private ticketService:TicketServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
    {
       let theatreId = params.get('theatreId');
       let movieId = params.get('id');
       if(movieId != null)
         {
           this.movieId = +movieId;
         }

      this.route.queryParams.subscribe(params => {
                                                  let timing = +params.timing;
                                                  if(theatreId != null && timing != null)
                                                     {
                                                       this.timing = timing;
                                                       this.theatreId = +theatreId;
                                                      this.theatreService.getTheatreByIdAndTime(+theatreId,timing)
                                                      .subscribe(res => {this.Theatre = res;

                                                                         if(theatreId!=null)
                                                                            this.seatService.getSeatsByTheatreIdAndTime(+theatreId,timing).subscribe(res =>{
                                                                               this.Seats = res;
                                                                               console.log(this.Seats);
                                                                               this.Seats.forEach(element => {
                                                                                 element.isActive = element.isBooked;

                                                                               });
                                                                            });


                                                                        }
                                                               );
                                                      }

                                                  }
                                        );

                                 });

  }

  validateInput()
  {
    //console.log(parseInt(this.numberOfSeats));
    if(parseInt(this.numberOfSeats) <= 0 || parseInt(this.numberOfSeats)> 100)
       {
         this.isValid = false;
         return;
       }

    this.numberOfSeats.length !=0 && this.nameOfUser.length !=0 ?this.isValid = true : this.isValid = false;

  }


  resetSeatState()
  {
    let theaterId  = this.Theatre.theatreId;

    this.seatService.getSeatsByTheatreIdAndTime(+theaterId,this.timing).subscribe
                                    (
                                      res =>{
                                              this.Seats = res;

                                              this.Seats.forEach(seat => {
                                                 seat.isActive = seat.isBooked;
                                              });

                                              console.log(this.Seats);
                                            }


                                    );
        this.price = 0;

  }


   onSeatPress(event:any)
   {      //console.log(event.target.value)
          this.numberOfSeats = event.target.value;
          this.validateInput();
          this.resetSeatState();
          console.log(this.isValid);
   }

   onNamePress(event:any)
   {
          this.nameOfUser = event.target.value;
          this.validateInput();
          console.log(this.isValid);
   }

   selectSeat(seatId: number){

     let seat: Seat = this.Seats[(seatId-1) % 100 ];

          if(seat.isActive == 0)
             {
               if(parseInt(this.numberOfSeats) > 0)
                   {
                      while(parseInt(this.numberOfSeats))
                          {
                             let seat = this.Seats[(seatId-1) % 100 ];
                             this.SeatsSelected.push(seat);

                             seatId++;

                             if(seat.isActive == 0)
                                {
                                   seat.isActive = 1;
                                   this.numberOfSeats = (parseInt(this.numberOfSeats) - 1).toString();
                                   this.price += 100;
                                }
                              else
                              {
                                break;
                              }
                          }
                  }
             }
          else
            {
              const index = this.SeatsSelected.indexOf(seat, 0);
              if (index > -1) {
                                this.SeatsSelected.splice(index, 1);
                              }
              seat.isActive = 0;
              this.price -= 100;
              this.numberOfSeats = (parseInt(this.numberOfSeats) + 1).toString();
            }


   }

  markSelecedSeatsBooked()
  {
    this.SeatsSelected.forEach(seat => {seat.isBooked = seat.isActive;});
  }

   paymentButtonClick(event:any)
   {
      this.markSelecedSeatsBooked();
      this.ticketService.setSelectedSeats(this.SeatsSelected);
      this.ticketService.setBookerName(this.nameOfUser);
      this.ticketService.generateTicket(this.nameOfUser,this.movieId,this.theatreId,this.SeatsSelected,this.timing);


      // Ticket ticket = new Ticket(this.movieId,'a',this.nameOfUser,this.theatreId);


      let URL = `movies/${this.movieId}/theatres/${this.theatreId}/ticket`;
      this.router.navigate([URL],{queryParams: { timing: this.timing }});
   }

}
