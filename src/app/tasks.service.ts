import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add(task: string) {
   this.tasksList.push(task);

  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(item => item !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
