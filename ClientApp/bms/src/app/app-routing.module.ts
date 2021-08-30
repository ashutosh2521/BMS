import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMovieListComponent } from './home-movie-list/home-movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SeatComponent } from './services/seat/seat.component';
import { TheatreComponent } from './theatre/theatre.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:'', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: HomeMovieListComponent},
  {path:'movies/:id', component:MovieDetailComponent},
  {path:'movies/:id/theatres',component:TheatreComponent},
  {path:'movies/:id/theatres/:theatreId',component:SeatComponent},
  {path:'movies/:movieId/theatres/:theatreId/ticket', component:TicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
