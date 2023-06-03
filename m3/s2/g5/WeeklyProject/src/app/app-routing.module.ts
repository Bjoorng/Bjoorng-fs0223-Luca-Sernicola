import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CompletedComponent } from './completed/completed.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'list',
    component: ListComponent,
  },
  {
    path: 'list/edit/:id',
    component: EditComponent,
  },
  {
    path:'completed',
    component: CompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
