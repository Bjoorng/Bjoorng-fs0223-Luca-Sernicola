import { Component } from '@angular/core';
import { Form } from '../Modules/form';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component  {

  @Form('f',{ static: true }) form!:NgForm;

  submit(form:NgForm) {
    console.log(form);
  }

}
