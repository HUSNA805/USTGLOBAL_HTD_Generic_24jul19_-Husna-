import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { from } from 'rxjs';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { FirebaseComponent } from './firebase/firebase.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    MoviesComponent,
    FirebaseComponent,
    UsersComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',component:HeaderComponent
      },
      {
        path: 'home',component:HomeComponent
      },
      {
        path: 'news',component:NewsComponent
      },
      {
        path: 'movies',component:MoviesComponent
      },
      {
        path: 'firebase',component:FirebaseComponent
      },
      {
        path: 'users',component:UsersComponent
      },
      
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
