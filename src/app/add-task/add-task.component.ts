import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor() { }
  newTask: string = '';

  @Output()
  addTask = new EventEmitter<string>();

  ngOnInit() {
  }

  add() {
    this.addTask.emit(this.newTask);
    this.newTask = '';
  }

}
