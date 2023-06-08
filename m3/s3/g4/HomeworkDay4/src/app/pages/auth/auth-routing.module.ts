import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
      path: '',
      component: AuthComponent,
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.component').then((m) => m.LoginComponent)
    },
    {
      path: 'signup',
      loadChildren: () => import('./signup/signup.component').then((m) => m.SignupComponent)
    }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
