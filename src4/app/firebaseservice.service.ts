import { Injectable, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService implements DoCheck {

url:string ='https://sneha-761d8.firebaseio.com/';

selectedUser:User={
  Brand:null,
  Model:null,
  YOR:null,
  Cost:null,
}
  

  constructor(private http: HttpClient) { 
    
  }
  users=[];
  getData(){
    this.http.get(`${this.url}users.json`).pipe(map(resData=>
    {
      let usersArray=[];
      for(let key in resData){
        usersArray.push({...resData[key],id:key});
      }
      return usersArray;
    })).subscribe(data=>
      {
      this.users=data;
      console.log(data);
      },err=>{
        console.log(err);
      });
}


//in order to get http data http client is required
postData(data){
  //it takes two arguements (1st api 2nd data we want to post (usually json objct))
 //this post url   is generated in chrome try it
 return this.http.post(`${this.url}/users.json`,data);
  // return this..post(`${this.url}/users.json`,data);
}
ngDoCheck(){
  this.getData();
}

//takes 2 arguments
updateData(data)
{
  return this.http.put(`${this.url}users/${data.id}.json`,data); //put for  update purpose and it takes 2 arguments it is url
}
deleteData(data)
{
  return this.http.delete(`${this.url}users/${data.id}.json`); //to delete
}


}
