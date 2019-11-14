import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from './../tasks.service';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent implements OnInit {

  // @Input()
  // tasksDone: Array<string> = [];

    tasksDone: Array<string> = [];

  constructor(private tasksService: TasksService) {

    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<string>) => {
      this.tasksDone = tasks;
    });


   }

  ngOnInit() {
  }

}
