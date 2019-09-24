import { Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name = 'husna';
  redColor = true;
  textClasses = 'bg-success text-white';
  imgUrl = '';
  p = true;
  padding = '50px';
  colspan = '2';
  
  constructor() {
    setTimeout(()=> {
      this.redColor = false;
      this.p = false;
    },5000)
   }

  ngOnInit() {
  }

}
