import { Component, OnInit } from '@angular/core';
import { MyTodo} from '../models/my-todo-model'
import { ToDoService } from '../service/to-do-service.service';
import { ServiceClass } from '../models/service-class';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})

export class CompletedComponent implements OnInit {

  arrList:MyTodo[] = [];
  toDoElement:ServiceClass = new ServiceClass('', true);

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

    undo(element:MyTodo) {
      if(element.completed == true){
      element.completed = false;
      this.toDoSVC.updateToDo(element).then((res) => this.getToDo())
      };
      console.log(this.toDoElement);
    }

    getToDo(){
      this.toDoSVC.getToDo().then((res) => {
        this.arrList = res;
    });
  }
}
