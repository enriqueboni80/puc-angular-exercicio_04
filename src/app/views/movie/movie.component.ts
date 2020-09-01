import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service'
import { Movie } from './../../models/movie'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];

  constructor(
    public movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  // Chama o serviço para obtém todos os Filmes
  getMovies() {
    this.movieService.getMovies().subscribe((movies: Movie) => {
      this.movies = movies.results;
    })
  }
}
