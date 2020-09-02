import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie, IMovieResults } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = 'https://api.themoviedb.org/3/movie/popular?api_key=d416af5d4faee64e25ab001d87aab5c3'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // Obtem todos os filmes
  getMovies(): Observable<IMovieResults> {
    return this.httpClient.get<IMovieResults>(this.url);
  }
}
