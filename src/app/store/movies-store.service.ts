import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMovie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesStoreService {

  private readonly moviesSubject = new BehaviorSubject<IMovie[]>([])
  public movies$ = this.moviesSubject.asObservable

  private get movies(): IMovie[] {
    return this.moviesSubject.getValue()
  }

  private set movies(value: IMovie[]) {
    this.moviesSubject.next(value)
  }

  public setMovies(movies: IMovie[]) {
    this.movies = movies
  }

  constructor() { }
}
