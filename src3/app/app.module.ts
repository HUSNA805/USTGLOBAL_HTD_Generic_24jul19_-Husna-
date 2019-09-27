import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    TypicodeComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'', component:HeaderComponent},
      { path:'home', component:HomeComponent},
      { path:'github' , component:GithubComponent},
      
      { path:'typicode', component:TypicodeComponent}
    
  ]),
  HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
