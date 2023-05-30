import { Component } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent {
  posts:any[] = []

  constructor(private postSvc: PostsService){

    postSvc.getActivePosts()
    .then(posts => {this.posts = posts.filter(p => p.active)});

  }
}
