import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';
import { AccessData } from './interfaces/access-data';
import { BehaviorSubject, map, tap } from 'rxjs';
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
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(data:LoginData){
    return this.httpClient.post<AccessData>(this.api +
    '/login', data)
    .pipe(tap(data =>{
      this.authSubj.next(data);
      localStorage.setItem('user', JSON.stringify(data))

      const expiration = this.jwtHelper
      .getTokenExpirationDate(data.token) as
      Date
    }))
  }

  getUser(){
    const user = localStorage.getItem('user');
    const oldUser = JSON.parse('user')
    if(!user){
      return
    }
    if(this.jwtHelper.isTokenExpired(oldUser.token)){
      return
    }
    this.authSubj.next(oldUser);
  }

  signup(data:SignupData){
    return this.httpClient.post<AccessData>(this.api + '/signup', data);
  }

  logOut(){
    this.authSubj.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
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
}
