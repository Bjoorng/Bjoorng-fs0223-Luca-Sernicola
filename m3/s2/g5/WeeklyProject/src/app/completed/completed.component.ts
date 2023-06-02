import { Component, OnInit } from '@angular/core';
import { MyTodo} from '../models/my-todo-model'
import { ToDoService } from '../service/to-do-service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})

export class CompletedComponent implements OnInit {

  arrList:MyTodo[] = [];

  constructor(private toDoSVC:ToDoService) {}

    ngOnInit(){
      this.getToDo();
    }

    deleteToDo(id?: number) {
      this.toDoSVC.deleteToDo(id)
      .then((res) => {
          console.log('Peccato');
          this.getToDo();
        });
    }

    getToDo(){
      this.toDoSVC.getToDo().then((res) => {
        this.arrList = res;
    });
  }
}
