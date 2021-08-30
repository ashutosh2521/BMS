import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../model/movie-model';
import { Theatre } from '../model/theatre-timing-model';
import { MovieServiceService } from '../services/movie-service.service';
import { TheatreServiceService } from '../services/theatre-service.service';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss']
})
export class TheatreComponent implements OnInit {
  movieId:number=0 ;
  theatres: Theatre[] = [];
  currentMovie : any;
  currentDate :number = Date.now();

  constructor(private router:Router,public theaterservcie: TheatreServiceService,private route: ActivatedRoute,private movieservice:MovieServiceService) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {

        let id = params.get('id');

        if(id != null)
          {
                this.movieId = +id;
                this.theaterservcie.getTheatresByMovieId(+id).subscribe(res =>{
                  //console.log(res);
                  this.theatres = res;
                 //console.log(this.theatres);
                });

          }
      }
    );


   this.movieservice.getMovieById(this.movieId).subscribe(res =>
    {
      this.currentMovie = res;
    });




  }


}
