import { Component } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
  posts:any[] = []

  constructor(private postSvc: PostsService){

    postSvc.getActivePosts()
    .then(posts => {this.posts = posts.filter(p => !p.active)});

  }
}

