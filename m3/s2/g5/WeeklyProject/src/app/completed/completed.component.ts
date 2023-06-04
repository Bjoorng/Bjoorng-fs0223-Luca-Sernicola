import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  toDoElement:ServiceClass = new ServiceClass('', true, 0);
  title:string = "";
  comprehension:number = 0;

  constructor(
    private toDoSVC:ToDoService,
    private route:ActivatedRoute
    ) {}

    ngOnInit(){
      this.getToDo()
    }

    deleteToDo(id?: number) {
      this.toDoSVC.deleteToDo(id)
      .then((res) => {
          console.log('Peccato');
          this.getToDo();
        });
    }

    create(){
      if (this.title != ''){
        this.toDoElement.comprehension = 10;
        this.toDoSVC.addToList(this.toDoElement)
        .then(res => this.getToDo());
        this.title = '';
        this.comprehension = 0;
      }
    }

    undo(element:MyTodo) {
      if(element.completed == true){
      element.completed = false;
      element.comprehension = 2;
      this.toDoSVC.updateToDo(element).then((res) => this.getToDo())
      };
      console.log(this.toDoElement);
    }

    getToDo(){
      this.toDoSVC.getToDo().then((res) => {
        this.arrList = res.filter(item => item.completed == true);
    });
  }
}
