import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMovieListComponent } from './home-movie-list/home-movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path:'',component:HomeMovieListComponent},
  {path:'movie-detail/:id', component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
