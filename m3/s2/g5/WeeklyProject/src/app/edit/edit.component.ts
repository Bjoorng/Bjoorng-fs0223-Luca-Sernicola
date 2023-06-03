import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToDoService } from '../service/to-do-service.service';
import { ServiceClass } from '../models/service-class';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  toDoElement:ServiceClass = new ServiceClass('', false);

  constructor(
    private toDoSVC:ToDoService,
    private location: Location,
    private router:ActivatedRoute
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

    update() {
      this.toDoSVC.updateToDo(this.toDoElement)
      .then(res => this.backToList())

    }

    backToList(){
      this.location.back();
    }
}
