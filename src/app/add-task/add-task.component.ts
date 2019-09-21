import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  tasks: any[] = [];
  dataFromInput: any = '';
  sendData(data) {
    this.tasks = data;
    console.log(data);
  }
  constructor() { }

  ngOnInit() {
  }

}
