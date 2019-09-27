import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firebase1Service } from '../firebase1.service'

@Component({
  selector: 'app-firebase1',
  templateUrl: './firebase1.component.html',
  styleUrls: ['./firebase1.component.css']
})
export class Firebase1Component implements OnInit {
  constructor(private firebase1Service: Firebase1Service) { }

postUser(form1: NgForm) {
  this.firebase1Service.postData(form1.value).subscribe(data => {
    console.log(data);
    form1.reset();
      }, err => {
        console.log(err);
      });
        }

  ngOnInit() {
  }

}
