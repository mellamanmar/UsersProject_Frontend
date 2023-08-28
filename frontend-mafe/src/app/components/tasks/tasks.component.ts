import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks !: any[];

    constructor(private tasksServices: TasksService){
          }

    ngOnInit(){
        this.tasksServices.getTasks()
        .subscribe(
          res => {
            console.log(res)
            this.tasks = res;
          },
          err => console.log(err)
        )
    }
}
