import { Component } from '@angular/core';
import { MyTodo} from '../models/my-todo-model'
import { ToDoServiceService } from '../service/to-do-service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})

export class CompletedComponent {

  arrList:MyTodo[] = [];

  constructor(private toDoService:ToDoServiceService) {}

    ngOnInit(){
      this.getToDo();
    }

    deleteToDo(id: number) {
      this.toDoService.deleteToDo(id)
      .then((res) => {
          console.log('Peccato');
          this.getToDo();
        });
    }

    getToDo(){
      this.toDoService.getToDo().then((res) => {
        this.arrList = res;
    });
  }
}
