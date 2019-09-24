import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {


  bikeData : any = '' ;
  bikes = [
  {
    brand : 'ktm',
    img : 'https://cdn.pixabay.com/photo/2014/12/16/03/37/motor-cycle-569865__340.jpg',
    description : 'ktm bike'
  },
  {
    brand : 'royal enfield',
    img : 'https://i.ndtvimg.com/i/2016-06/royal-enfield-classic-350_827x510_51465639185.jpg',
    description : 'royal enfield classic 350'
  },
  {
    brand : 'tvs apache 180',
    img : 'https://c.ndtvimg.com/2018-11/d4scc96g_jawa-forty-two_625x300_16_November_18.jpg',
    description : 'tvs apache is a single cylinder bike'
  },
  {
    brand :'bajaj',
    img : 'https://i.ndtvimg.com/i/2017-01/bajaj-v-cafe-racer-concept_827x510_51483705517.jpg',
    description : 'bajaj bike'
  },
  {
    brand : 'tvs',
    img : 'https://cdn.pixabay.com/photo/2016/01/19/16/46/motorcycle-1149389__340.jpg',
    description : 'tvs bike'
  }
  ];
  
  
  constructor() { }

  sendBike(bike){
    this.bikeData=bike;
  }

  ngOnInit() {
  }

}
