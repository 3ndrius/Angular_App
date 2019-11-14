import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  private tasksListObs = new BehaviorSubject<Array<string>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<string>>([]);

  constructor() {

    this.tasksList = ["Programming"];
    this.tasksListObs.next(this.tasksList);
   }



  add(task: string) {
   this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(item => item !== task);
    this.tasksListObs.next(this.tasksList); // emit
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getTasksListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }


}
