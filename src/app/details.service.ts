import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operator';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  // fetchApiUrl = '// https://api.github.com/users';
  details: any[] = [];

  constructor(private http: HttpClient) { }

  getdata(data) {
    return this.http.get(`${this.details}.json`).map((resData => {
      return this.details(resData);
    }));
  }
}
