import { Component, OnInit } from '@angular/core';
import { MyTodo} from '../models/my-todo-model'
import { ToDoServiceService } from '../service/to-do-service.service';
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

  constructor(private toDoService:ToDoServiceService) {}

    ngOnInit(){
      this.getToDo();
    }

    deleteToDo(id?: number) {
      this.toDoService.deleteToDo(id)
      .then((res) => {
          console.log('Peccato');
          this.getToDo();
        });
    }

    create(){
      this.toDoService.addToList(this.toDoElement)
      .then(res => this.getToDo());
      this.innerText = '';
    }

    complete(element:MyTodo) {
      if(element.completed == false){
      element.completed = true;
      this.toDoService.updateToDo(element).then((res) => this.getToDo())
      };
      console.log(this.toDoElement);
    }

    getToDo(){
      this.toDoService.getToDo().then((res) => {
        this.arrList = res;
      });
    }
}
