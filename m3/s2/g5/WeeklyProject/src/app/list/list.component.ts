import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  title:string = "";
  loading:boolean = true;
  comprehension:number = 0;
  toDoElement:ServiceClass = new ServiceClass('', false);

  constructor(
    private toDoSVC:ToDoService,
    private router:Router
    ) {}

    ngOnInit(){
      this.getToDo();
    }

    delete(id?: number) {
      this.toDoSVC.deleteToDo(id)
      .then((res) => {
          console.log('What a shame');
          this.getToDo();
      });
    }

    create(){
      if (this.title != ''){
        if(this.comprehension < 10) {
          this.toDoSVC.addToList(this.toDoElement)
          .then(res => this.getToDo());
          this.title = '';
          this.comprehension = 0;
        }else if(this.comprehension == 10){
          this.toDoElement.completed = true;
          this.toDoSVC.addToList(this.toDoElement)
          .then(res => {
            this.router.navigate(['/completed'],
            { queryParams: { newElement: JSON.stringify(this.toDoElement) } })
          });
        }
      }{
        this.title = '';
        this.comprehension = 0;
      }
    }

    complete(element:MyTodo) {
      if(!element.completed){
      element.comprehension = 10;
      element.completed = true;
      this.toDoSVC.updateToDo(element).then((res) => this.getToDo())
      };
      console.log(this.toDoElement);
    }

    toEdit(id?:number) {
      this.router.navigateByUrl(`list/edit/${id}`);
    }

    getToDo(){
      this.toDoSVC.getToDo().then((res) => {
        this.arrList = res.filter(item => !item.completed);
      this.loading = false;
      });
    }
}
