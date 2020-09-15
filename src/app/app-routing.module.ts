import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './views/movie/movie.component';
import { MovieDetailComponent } from './views/movie/movie-detail/movie-detail.component';

const routes: Routes = [
  {path: "",component: MovieComponent},
  {path: "movie/:id",component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
