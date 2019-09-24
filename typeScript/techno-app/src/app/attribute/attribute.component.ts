import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {


  isSuccess = true;
  
  classesArray = ["text-danger","bg-dark", "mt-5"];
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.isSuccess = false;
    // },1000);
    setInterval(()=> {
      this.isSuccess = !this.isSuccess;
    }, 1000);
  }

}
