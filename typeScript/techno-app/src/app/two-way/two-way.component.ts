import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  constructor() {
    console.log('constructor running');
   }

  background = 'red';
  buttonEvent(data){
    console.log(data);
  }

  // colorChange(){
  //   if(this.background === 'red'){
  //     this.background = 'crimson';
  //   }else{
  //     this.background = 'red';
  //   }
  // }

  colorChange(data){
    this.background = data ;
  }

  ngOnInit() {
    console.log('oninit implemented')
  }

}
