import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  // @Input()
  // tasksChild;
  tasksList = [];
  // @Output()
  // eventTask = new EventEmitter<string>();
  // @Output()
  // doneTask = new EventEmitter<string>();

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks:Array<string>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }
  remove(task: string) {
    // this.eventTask.emit(task);
    this.tasksService.remove(task);
  }
  done(task: string) {
    // this.doneTask.emit(task);
    this.tasksService.done(task);
  }

}
