import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CompletedComponent } from './completed/completed.component';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { MainComponent } from './main/main.component';
import { FakeModalComponent } from './fake-modal/fake-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CompletedComponent,
    NavComponent,
    FootComponent,
    MainComponent,
    FakeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
