
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  moviesFilter = '';
  @Output() filterMovies = new EventEmitter<string>();
  @Output() orderBy = new EventEmitter<string>();

  constructor() { }

  onMoviesFilter(value: string): void {
    this.filterMovies.emit(value);
  }

  onOrderBy(orderField: string): void {
    this.orderBy.emit(orderField)
  }
}
