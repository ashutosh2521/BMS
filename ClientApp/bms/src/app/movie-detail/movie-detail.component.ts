import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../model/movie-model';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id = 0;
  movie: any;
  isMovieLoaded = false;
  movieId : number | null = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieServiceService) { }


    ngOnInit(): void {
    this.route.paramMap.subscribe(
        params => {

          let id = params.get('id');

          if(id != null)
            {
                  this.movieId = +id;

                  this.movieService.getMovieById(+id).subscribe(res =>
                  {
                    if(res != null)
                    {
                      this.isMovieLoaded = true;
                    }

                    this.movie = res;
                  })

            }
        }
      );
  }

   NavigateToTheaterComponent()
   {

   }


}
