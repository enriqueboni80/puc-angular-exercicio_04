import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: Movie
  @Input() urlImgs: string = "https://image.tmdb.org/t/p/w500/"


  constructor() { }

  ngOnInit(): void {
  }

}
