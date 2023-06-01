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

    this.postSvc.getPostsArray()
    let post = this.postSvc.getPostsArray();
    let filteredPosts = post.filter(post => post.type == 'news');
    this.posts = filteredPosts;

  }
}
