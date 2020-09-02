import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movie: IMovie
  @Input() urlImgs: string = "https://image.tmdb.org/t/p/w500/"


  constructor() { }

  ngOnInit(): void {
  }

}
