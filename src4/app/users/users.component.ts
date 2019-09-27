import { Component, OnInit } from '@angular/core';
import {FirebaseserviceService} from '../firebaseservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  date=Date.now();

  constructor(private firebaseService: FirebaseserviceService, private router: Router) { }
  updateUser(user) {
    this.firebaseService.selectedUser = user; // assigning obj which is to be updated.
    this.router.navigateByUrl('firebase'); // redirecting to from page

  }
  deleteData(user) {
    this.firebaseService.deleteData(user).subscribe(resData => {
    console.log(resData);
    this.firebaseService.getData();
    });
  }

  ngOnInit() {
    this.firebaseService.getData();
    console.log(this.firebaseService.users);
  }
}
