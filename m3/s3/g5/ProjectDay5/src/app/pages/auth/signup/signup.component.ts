import { Component } from '@angular/core';
import { SignupData } from '../interfaces/signup-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    private authService: AuthService,
    private router: Router
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
      this.router.navigate(['auth/login']);
    })
  }
}
