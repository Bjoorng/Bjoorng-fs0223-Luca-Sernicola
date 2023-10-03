import { Component, OnInit } from '@angular/core';
import { carouselData } from 'src/app/Data/carousel-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselData:any;
  currentSlide=0;
  interval:any;

  ngOnInit(){
    this.carouselData = carouselData;
    this.autoPlay();
  }

  autoPlay(){
    setInterval(()=>{
      this.nextSlide();
    },2000)
  }

  nextSlide(){
    this.currentSlide=(this.currentSlide+1) % this.carouselData.lenght;
  }
}
