import { Component } from '@angular/core';
import { SignupData } from '../interfaces/signup-data';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    private authService: AuthService
  ){}

  data:SignupData = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  signUp(){
    this.authService.signup(this.data)
    .subscribe(data => {
      alert(data.user.firstName)
    })
  }
}
