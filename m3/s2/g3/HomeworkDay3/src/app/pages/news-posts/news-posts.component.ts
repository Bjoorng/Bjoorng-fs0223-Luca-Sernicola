import { Component } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-news-posts',
  templateUrl: './news-posts.component.html',
  styleUrls: ['./news-posts.component.scss']
})
export class NewsPostsComponent {
  posts:any[] = []

  constructor(private postSvc: PostsService){

    postSvc.getActivePosts()
    .then(posts => {this.posts = posts.filter(p => p.type == 'news')});

  }
}
