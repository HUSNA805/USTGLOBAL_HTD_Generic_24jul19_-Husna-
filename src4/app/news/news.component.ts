import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
indianNews: any[] = [];
  constructor(private http: HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=c6319814d598429c89b24b9e6a06bbef')
    .subscribe(resData => {
      this.indianNews = resData.articles;
      // console.log(this.indianNews);
    });
   }

  ngOnInit() {
  }


}
