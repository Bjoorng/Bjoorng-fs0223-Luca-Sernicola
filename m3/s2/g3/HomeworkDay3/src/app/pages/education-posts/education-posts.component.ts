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

    postSvc.getActivePosts()
    .then(posts => {this.posts = posts.filter(p => p.type == 'politics')});

  }
}

