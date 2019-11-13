import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newTask: string;
  tasksList: Array<string> = [];

  add(task: string) {
   this.tasksList.push(this.newTask);
   console.log(this.tasksList);
  }

}
