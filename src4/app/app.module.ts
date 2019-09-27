import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { Firebase1Component } from './firebase1/firebase1.component';
import { UsersComponent } from './users/users.component';
import { PipePipe } from './pipe.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    MoviesComponent,
    FirebaseComponent,
    Firebase1Component,
    UsersComponent,
    PipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
