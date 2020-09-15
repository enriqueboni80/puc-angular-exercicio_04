import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieComponent } from './views/movie/movie.component';
import { MovieItemComponent } from './views/movie/movie-item/movie-item.component';


import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './views/header/header.component';
import { MovieDetailComponent } from './views/movie/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieItemComponent,
    HeaderComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
