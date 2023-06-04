import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MyTodo} from '../models/my-todo-model'
import { ToDoService } from '../service/to-do-service.service';
import { ServiceClass } from '../models/service-class';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  toDoElement:ServiceClass = new ServiceClass('', false, 0);

  constructor(
    private toDoSVC:ToDoService,
    private location: Location,
    private router:ActivatedRoute,
    private routing:Router
    ) {}

    ngOnInit(){
      this.router.params
      .subscribe((params:any) => {
        this.toDoSVC.getSingleToDo(params.id)
        .then(res => {
          this.toDoElement = res;
        })
      })
    }

    update(element:MyTodo) {
      if (element.comprehension && element.comprehension < 10) {
        this.toDoSVC.updateToDo(element)
          .then(res => this.backToList());
      } else if (element.comprehension == 10) {
        element.completed = true;
        this.toDoSVC.updateToDo(element)
          .then(res => {
            this.routing.navigate(['/completed'], { queryParams: { newElement: JSON.stringify(element) } });
          });
      }
    }


    backToList(){
      this.location.back();
    }
}
