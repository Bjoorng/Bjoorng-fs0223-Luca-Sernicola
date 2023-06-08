import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './pages/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
