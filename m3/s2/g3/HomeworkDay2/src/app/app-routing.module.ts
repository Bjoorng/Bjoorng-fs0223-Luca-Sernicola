import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsPostsComponent } from './pages/news-posts/news-posts.component';
import { EducationPostsComponent } from './pages/education-posts/education-posts.component';
import { PoliticsPostsComponent} from './pages/politics-posts/politics-posts.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'news-posts',
    component: NewsPostsComponent
  },
  {
    path:'education-posts',
    component: EducationPostsComponent
  },
  {
    path:'politics-posts',
    component: PoliticsPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
