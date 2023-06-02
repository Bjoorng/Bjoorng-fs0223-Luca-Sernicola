import { Component, OnInit } from '@angular/core';
import { MyTodo} from '../models/my-todo-model'
import { ToDoService } from '../service/to-do-service.service';
import { ServiceClass } from '../models/service-class';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  arrList:MyTodo[] = [];
  innerText:string = "";
  toDoElement:ServiceClass = new ServiceClass('', false);

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

    create(){
      this.toDoSVC.addToList(this.toDoElement)
      .then(res => this.getToDo());
      this.innerText = '';
    }

    complete(element:MyTodo) {
      if(element.completed == false){
      element.completed = true;
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
