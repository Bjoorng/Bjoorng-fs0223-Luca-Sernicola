import { Component, OnInit } from '@angular/core';
import { cds } from 'src/app/Data/cds';
import { vinyls } from 'src/app/Data/vinyls';
import { accessories } from 'src/app/Data/accessories';
import { merch } from 'src/app/Data/merch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cds:any;
  vinyls:any;
  merch:any;
  accessories:any;

  ngOnInit(){
    this.vinyls = vinyls;
    this.cds = cds;
    this.accessories = accessories;
    this.merch = merch;
  }

}
