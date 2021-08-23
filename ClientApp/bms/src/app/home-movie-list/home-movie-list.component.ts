import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../model/movie-model';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-home-movie-list',
  templateUrl: './home-movie-list.component.html',
  styleUrls: ['./home-movie-list.component.scss']
})
export class HomeMovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  currentSearchedMovie : string ='';
  constructor(private router:Router,public movieService:MovieServiceService) {}




  ngOnInit(): void {

      this.movieService.getMovies().subscribe(res =>{
        this.movies = res;
       this.filteredMovies = res;
      });


       this.movieService.currentSearchNameChange.subscribe(value =>{
        this.currentSearchedMovie = value;
        this.filteredMovies = this.movieService.filterMovies(this.movies, value);
      });

  }


}
