import { User } from './../auth/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { IPost } from './ipost';
import { PostsService } from './posts.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userLoggedId:number = 0;
  posts:IPost[] = [];
  userName:string = '';
  newPost:IPost = {
    title:'',
    body:'',
    userId:0,
    id:0,
  };

  constructor(
    private authService:AuthService,
    private postSVC:PostsService
    ){}

  ngOnInit(){
    this.postSVC.getAll().subscribe((posts)=>{
      this.posts = posts;
    })
    const user:any = localStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    this.userLoggedId = parsedUser.id;
  }

  anotherOne(){
    const user = <string>localStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    this.userName = parsedUser.name;
    this.newPost.userId = this.userLoggedId;
    this.postSVC.post(this.newPost)
    .subscribe(data=>{
      data.userId = <number>this.newPost.userId;
      this.posts.push(data);
    })
  }

  delete(id?:number){
    this.postSVC.delete(id)
    .subscribe(data=>{
      let index = this.posts.findIndex(p => p.id == id)
      this.posts.splice(index,1)
    })
  }

  logOut(){
    this.authService.logOut()
  }
}
