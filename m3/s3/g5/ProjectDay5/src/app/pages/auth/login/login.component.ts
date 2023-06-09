import { Component } from '@angular/core';
import { LoginData } from '../interfaces/login-data';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService
    ){}

  data: LoginData = {
    email: '',
    password: '',
  }

  getIn(){
    this.authService.login(this.data)
    .subscribe(element => {
      alert(`sei loggato come ${element.user.firstName}`)
    })
  }

}
