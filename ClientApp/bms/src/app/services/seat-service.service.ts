import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seat } from '../model/seat-model';

@Injectable({
  providedIn: 'root'
})
export class SeatServiceService {
  private baseUrl : String = 'https://localhost:44339/api/';
  private headers: HttpHeaders;
  constructor(private http: HttpClient)
  {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }



  getSeatsByTheatreIdAndTime(id:number,time:number) : Observable<Seat[]>
  {
    return this.http.get<Seat[]>(this.baseUrl + 'Seats/get-seats-by-theatre-id/' + id+ "/" + time);
  }

  updateSelectedSeats(seatsSelected:Seat[])
  {
    return this.http.put<Seat[]>(this.baseUrl +'Seats/update-seats' ,seatsSelected);
  }

}
