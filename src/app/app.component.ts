import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


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
