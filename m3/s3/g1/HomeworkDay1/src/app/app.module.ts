import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserClassComponent } from './user-class/user-class.component';
import { HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AlbumComponent } from './album/album.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClient,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
