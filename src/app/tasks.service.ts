import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './model/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksList: Array<Task> = [];
  tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {

    this.tasksList = [{name: 'Programowanie', created: new Date() }, {name: "Running", created: new Date() }];
    this.tasksListObs.next(this.tasksList);
   }



  add(task: Task) {
   this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(item => item !== task);
    this.tasksListObs.next(this.tasksList); // emit
  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }


}
