import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from './../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  newTask: string = '';

  constructor(private tasksService: TasksService) { }


  // @Output()
  // addTask = new EventEmitter<string>();

  ngOnInit() {
  }

  add() {
    this.tasksService.add(this.newTask);
    this.newTask = '';
  }

}
