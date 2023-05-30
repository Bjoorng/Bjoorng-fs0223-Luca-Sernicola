import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  api:string = "assets/db.json";
  constructor() { }

  getActivePosts():Promise<Post[]>{
    return fetch(this.api).then(res => res.json())
  }
}
