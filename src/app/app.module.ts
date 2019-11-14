import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDoneComponent } from './task-done/task-done.component';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    AddTaskComponent,
    TaskDoneComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
