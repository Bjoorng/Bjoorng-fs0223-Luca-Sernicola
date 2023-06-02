import { Component, OnInit } from '@angular/core';
import { MyTodo} from '../models/my-todo-model'
import { ToDoServiceService } from '../service/to-do-service.service';
import { ServiceClass } from '../models/service-class';

@Component({
  selector: 'app-fake-modal',
  templateUrl: './fake-modal.component.html',
  styleUrls: ['./fake-modal.component.scss']
})

export class FakeModalComponent implements OnInit {

  modal = document.querySelector('.modal');

  arrList:MyTodo[] = [];
  toDoElement:ServiceClass = new ServiceClass('', false);

  constructor(private toDoService:ToDoServiceService) {}

  ngOnInit(): void {
    this.getToDo();
  }

  // editToDo() {
  //   this.toDoService.updateToDo()
  //   .then (res => this.getToDo())
  // }

  getToDo() {
    this.toDoService.getToDo().then((res) => {
      this.arrList = res;
    });
  }

}
