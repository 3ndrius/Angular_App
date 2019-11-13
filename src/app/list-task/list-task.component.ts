import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  @Input()
  tasksChild;

  @Output()
  eventTask = new EventEmitter<string>();
  @Output()
  doneTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  remove(task: string) {
    this.eventTask.emit(task);
  }
  done(task: string) {
    this.doneTask.emit(task);
  }

}
