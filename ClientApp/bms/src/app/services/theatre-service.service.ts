import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Theatre } from '../model/theatre-timing-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheatreServiceService {
  private headers: HttpHeaders;
  private baseUrl : String = 'https://localhost:44339/api/';

  constructor(private http :HttpClient)
  {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  getTheatresByMovieId(id:number) : Observable<Theatre[]>
  {
     return this.http.get<Theatre[]>(this.baseUrl + 'Theater/get-theatre-by-movie-id/'+id);
  }

  getTheatreBYId(id: Number) : Observable<Theatre>
  {
    return this.http.get<Theatre>(this.baseUrl + 'Theater/get-theatre-by-theatre-id/' + id);
  }

  getTheatreByIdAndTime(id:number,timing:number)
  {
    return this.http.get<Theatre>(this.baseUrl+'Theater/get-theatre-by-theatre-id-and-time/'+id+'/'+timing);
  }


}
