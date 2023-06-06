import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { AlbumClass } from './albumclass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HomeworkDay1';

  constructor(private SVC:PhotosService) { }

  photoArr:AlbumClass[] = [];

  ngOnInit():void{
    this.SVC.get().subscribe(res => {
      this.photoArr = res;
    })
  }
}
