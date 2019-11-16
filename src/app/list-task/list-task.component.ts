import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from './../model/task';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  // @Input()
  // tasksChild;
  tasksList: Array<Task> = [];
  // @Output()
  // eventTask = new EventEmitter<string>();
  // @Output()
  // doneTask = new EventEmitter<string>();

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks:Array<Task>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }
  remove(task: Task) {
    // this.eventTask.emit(task);
    this.tasksService.remove(task);
  }
  done(task: Task) {
    // this.doneTask.emit(task);
    task.end = new Date();
    this.tasksService.done(task);
  }

}
