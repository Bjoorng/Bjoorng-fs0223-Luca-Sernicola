import { Component } from '@angular/core';
import { IPost } from '../ipost';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  post:Partial<IPost> = {
    title:'',
    body:''
  }

  constructor(
    private router:Router,
    private postSVC: PostsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params
    .subscribe((params:any) =>{
      this.postSVC.getOne(params.id)
      .subscribe((post) =>{
        this.post = post;
      })
    })
  }

  modify(){
    this.postSVC.put(this.post)
    .subscribe((posts)=>{
      this.router.navigate(['/home'])
    })
  }
}
