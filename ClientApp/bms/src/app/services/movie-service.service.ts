import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { combineLatest, Observable, Subject, throwError } from 'rxjs';
import { Movie } from '../model/movie-model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Injectable({
    providedIn: 'root'
  })
export class MovieServiceService {

  private headers: HttpHeaders;
  private baseUrl : String = 'https://localhost:44339/api/';

   currentSearchNameChange: Subject<string> = new Subject<string>();
   //currentSearchName : string = "";

  constructor(private http: HttpClient)
  {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  setCurrentSearchedName(currentSearchedName : string)
  {
    this.currentSearchNameChange.next(currentSearchedName);
    //this.currentSearchName = currentSearchedName;

  }

  filterMovies(movies: Movie[],name:string)
  {
      return movies.filter(movie => movie.movieName.toLowerCase().indexOf(name.toLowerCase()) != -1);
  }

  getMovies()
  {

     return this.http.get<Movie[]>(this.baseUrl + 'movie/get-all-movies');
  }


  getMovieById(id:number) : Observable<Movie>
   {
      return this.http.get<Movie>(this.baseUrl + 'movie/get-movie/'+id);

  }

}
