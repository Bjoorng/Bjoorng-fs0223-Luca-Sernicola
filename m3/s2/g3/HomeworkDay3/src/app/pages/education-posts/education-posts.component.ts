import { Component } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-education-posts',
  templateUrl: './education-posts.component.html',
  styleUrls: ['./education-posts.component.scss']
})
export class EducationPostsComponent {
  posts:any[] = []

  constructor(private postSvc: PostsService){

    this.postSvc.getPostsArray()
    let post = this.postSvc.getPostsArray();
    let filteredPosts = post.filter(post => post.type == 'education');
    this.posts = filteredPosts;
  }
}

