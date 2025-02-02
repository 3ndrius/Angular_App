import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from './../tasks.service';
import { Task } from './../model/task';

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
    const task: Task =({name: this.newTask, created: new Date()});
    this.tasksService.add(task);
    this.newTask = '';
  }

}
