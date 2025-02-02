import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from './../tasks.service';
import { Task } from './../model/task';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent implements OnInit {

  // @Input()
  // tasksDone: Array<string> = [];

    tasksDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {

    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks;
    });


   }

  ngOnInit() {
  }

}
