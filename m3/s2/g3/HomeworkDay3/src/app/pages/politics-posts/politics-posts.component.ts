import { Component } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-politics-posts',
  templateUrl: './politics-posts.component.html',
  styleUrls: ['./politics-posts.component.scss']
})
export class PoliticsPostsComponent {
  posts:any[] = []

  constructor(private postSvc: PostsService){

    postSvc.forEach((post) => {
      this.posts.push(post)
      })

  }
}
