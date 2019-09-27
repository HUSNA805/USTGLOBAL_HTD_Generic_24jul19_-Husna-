import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url: string='https://angular-http-19dba.firebaseio.com/';

selectedUser: user = {
  name : null,
  email: null,
  phno: null,
  id: null,

}

  constructor(private http: HttpClient) { }



users = []

getData(){
  this.http.get(`${this.url}users.json`).pipe(map(resData =>{
    let usersArray = [];
    for(let key in resData){
      usersArray.push({...resData[key], id: key})
    }
    return usersArray;
  })).subscribe(data=>{
    this.users = data;
  }, err=>{
console.log(err);
  });
}

  postData(data){
    return this.http.post(`${this.url}/users.json`,data);
  }
  updateData(data){
    return this.http.put(`${this.url}users/${data.id}.json`,data);
  }


ngDoCheck()
{
  this.getData();
}
}