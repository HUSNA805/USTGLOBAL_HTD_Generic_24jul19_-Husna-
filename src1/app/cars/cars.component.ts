import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carsData: any [] = [];
  cars = [{
    name: 'Maruti Suzuki',
    img: 'https://imgd.aeplcdn.com/227x128/cw/ec/40726/Maruti-Suzuki-SPresso-Exterior-169813.jpg?wm=0',
    description: 'Maruti Suzuki offers 17 car models in India, including 5 new car models in SUV/MUV category,'
  },
  {
    name: 'Renault Kwid Facelift',
    img: 'https://imgd.aeplcdn.com/310x174/cw/ec/39986/Renault-Kwid-Facelift-Exterior-169827.jpg?wm=0',
    description: 'The new Renault Kwid facelift will arrive with significant upgrades over its predecessor'
  },
{
  name: 'Audi',
    img: 'https://imgd.aeplcdn.com/310x174/cw/ec/39472/Audi-New-A6-Exterior-169814.jpg?wm=0',
    description:'Audi took the wraps off the new generation A6 at the 2018 Geneva Motor Show'
},
{
  name:'Reoylds trider',
    img: 'https://imgd.aeplcdn.com/272x153/cw/ec/39276/Renault-Triber-Right-Front-Three-Quarter-168511.jpg?wm=0',
    description:'Reynolds trider is the fastest cars '
}];

sendData(cars) {
  this.carsData = cars;
}
  constructor() { }

  ngOnInit() {
  }

}
