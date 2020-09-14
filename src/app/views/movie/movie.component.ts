import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service'
import { IMovie, IMovieResults } from './../../models/movie'
import { MoviesStoreService } from './../../store/movies-store.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: IMovie[];
  filteredMovies: IMovie[]
  moviesFilter: string

  constructor(
    private moviesStore: MoviesStoreService,
    public movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  // Chama o serviço para obtém todos os Filmes
  getMovies() {
    this.movieService.getMovies().subscribe((movies: IMovieResults) => {
      this.movies = movies.results;
      this.filteredMovies = movies.results
      /* this.moviesStore.setMovies(movies.results) */
    })
  }

  onMoviesFilter(valueFilter: string): void {
    this.filteredMovies = this.movies.filter(movie => movie.title.toLowerCase().includes(valueFilter.toLowerCase()))
  }
}
