import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seat } from '../model/seat-model';
import { Ticket } from '../model/ticket-model';
import { SeatServiceService } from './seat-service.service';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  private baseUrl : String = 'https://localhost:44339/api/';
  SeatsSelected:Seat[] = [];
  BookerName : string = "";

  constructor(private seatService:SeatServiceService,private http: HttpClient) { }
  /* How will I fetch the new ticket generated? */
  setSelectedSeats(seats : Seat[])
  {
       this.SeatsSelected = seats;
  }

  getSelectedSeats()
  {
    return this.SeatsSelected;
  }

  setBookerName(name : string)
  {
     this.BookerName = name;
  }

  getBookerName()
  {
    return this.BookerName;
  }

  generateTicket(nameOfUser:string,movieId:number,theatreId:number,seatsSelected:Seat[],timing:number)
  {
    let seatCodesSelected = "";

    seatsSelected.forEach(seat => {
      seatCodesSelected += seat.seatCode;
    });


    this.http.post(this.baseUrl+'Ticket/add-ticket',{Id:0,TheaterId:theatreId,MovieId:movieId,Time:timing,CustomerName:nameOfUser,BookedSeats:seatCodesSelected}).subscribe(generatedTicket =>{
         this.seatService.updateSelectedSeats(seatsSelected).subscribe(res => console.log(res + "Success"));
    });
  }





}
