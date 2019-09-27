import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Firebase1Service {
  url:string = 'https://angular-http1-2f161.firebaseio.com/';
  constructor(private http: HttpClient) { }
  postData(data){
return this.http.post(`${this.url}/userdata.json`,data);
  }

 
}
