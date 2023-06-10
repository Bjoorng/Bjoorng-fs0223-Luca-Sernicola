import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';
import { AccessData } from './interfaces/access-data';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignupData } from './interfaces/signup-data';
import { LoginData } from './interfaces/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();
  api = environment.apiUrl
  private authSubj = new BehaviorSubject<null | AccessData>(null);

  user$ = this.authSubj.asObservable();
  isLoggedIn$ = this.user$.pipe(map(data => Boolean(data)))

  logTimer:any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(data:LoginData){
    return this.http.post<AccessData>(this.api +
    '/login', data)
    .pipe(tap(data =>{
      this.authSubj.next(data);
      localStorage.setItem('user', JSON.stringify(data))

      const expiration = this.jwtHelper
      .getTokenExpirationDate(data.token) as Date
    }),
    catchError(this.getError))
  }

  getUser(){
    const user = localStorage.getItem('user');
    if(!user){
      return
    }
    const oldUser:AccessData = JSON.parse(user)
    if(this.jwtHelper.isTokenExpired(oldUser.token)){
      return
    }
    this.authSubj.next(oldUser);
  }

  signup(data:SignupData){
    return this.http.post<AccessData>(this.api + '/register', data)
    .pipe(catchError(this.getError));
  }

  logOut(){
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
    if (this.logTimer){
      clearTimeout(this.logTimer);
    }
  }

  autoLogOut(expiration:Date){
    const expired = expiration.getTime() - new Date().getTime();
    this.logTimer = setTimeout(() =>{
      this.logOut();
    }, expired)
  }

  getError(err:any){
    switch (err.error){
      case "Email and Password required":
        return throwError ('Email and Password are needed');
        break;
      case "Email already used":
        return throwError ('Email already registered');
        break;
      case "Invalid email":
        return throwError ('The email is invalid');
        break;
      case "Invalid password":
        return throwError ('The password is invalid');
      case "No User":
        return throwError ('Cannot find the user');
        break;
        default:
      return throwError ('Error');
        break;
    }
  }
}
