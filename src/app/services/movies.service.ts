import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie, IMovieResults } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  private withBaseUrl = path => `https://api.themoviedb.org/3/${path}?api_key=d416af5d4faee64e25ab001d87aab5c3`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getPopularMovies(): Observable<any> {
    return this.httpClient.get<IMovieResults>(this.withBaseUrl('movie/popular'));
  }

  getMovieByDetail(id: string): Observable<any> {
    return this.httpClient.get<any>(this.withBaseUrl(`movie/${id}`));
  }
}
