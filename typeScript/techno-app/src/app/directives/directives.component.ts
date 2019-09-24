import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  condition = false;

users = [{
  id : 1234,
  name : 'husna',
  city : 'bang'
},
{
  id : 1235,
  name : 'shama',
  city : 'mysore'
},
{
  id : 1236,
  name : 'pinky',
  city : 'up'
},
{
  id : 1237,
  name : 'bagii',
  city : 'chittur'
},
{
  id : 1238,
  name : 'miki',
  city : 'bang'
},
];
  constructor() { }

removeUser(i) {
  let index = this.users.indexOf(i);
  this.users.splice(index, 1);
  this.condition = true ;
}

  ngOnInit() {
  }

}
