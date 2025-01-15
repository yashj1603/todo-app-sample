import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations:[
    AppComponent,
    TaskListComponent],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[
    AppComponent,
    TaskListComponent
  ],
  providers: [TaskService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
