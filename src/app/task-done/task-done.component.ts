import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent implements OnInit {

  @Input()
  tasksDone;

  constructor() { }

  ngOnInit() {
  }

}
