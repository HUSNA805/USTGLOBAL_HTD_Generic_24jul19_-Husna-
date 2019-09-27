import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MoviesComponent } from './movies/movies.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'firebase', component: FirebaseComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
