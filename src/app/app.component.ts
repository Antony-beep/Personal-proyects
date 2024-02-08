import { Component } from '@angular/core';
import { delay, elementAt } from 'rxjs';
import { __await } from 'tslib';
import { DataHeader, SlidesInterface } from './interfaces/datos.interface';
import { DataService } from './servicios/data.service';
import SwiperCore , {Navigation,SwiperOptions, Autoplay} from 'swiper';
import { SwiperData } from './servicios/swipe.service';

SwiperCore.use([Navigation,Autoplay]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaCasaDelChef';
  burger:boolean =true;
  cross:boolean =false;
  items:boolean =false;
  path:string = 'target';
  entrada:boolean=true;

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  get dataTitulo():DataHeader[]{
    return this.dataService.dataTitulo;
  }

  scrolltoElement(argument:string){
    document.querySelector(argument)?.scrollIntoView({behavior:'smooth',block:'start'});
    this.closing();
  }
 
// Activations in Hamburger Bar Animation
  hideBurger(){ this.burger=false;this.cross=true;this.entrada=true;this.items=true;}
  closing(){ this.entrada=false;this.burger=true;this.cross=false; 
  }

  // Swiper COonfigutation
  config: SwiperOptions = {
    slidesPerView: 1,
    centeredSlidesBounds:true,
    spaceBetween: 0,
    autoplay:true,
    effect:'fade',
    keyboard:true,
    scrollbar: { draggable: true },
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    
  };
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  // Test Swiper Configuration
  //Images information 
  get ImgSlides():SlidesInterface[]{
    return this.dataService.SwiperImgSala;
  }
  //Get Images Air Games
  get ImgSlideJuegosA():SlidesInterface[]{
    return this.dataService.SwiperImgJuegosA;
  }
  //Get Images from Laguna
  get ImgSlideLaguna():SlidesInterface[]{
    return this.dataService.SwiperImgLaguna;
  }
  //Get Images from Piscina
  get ImgSlidePiscina():SlidesInterface[]{
    return this.dataService.SwiperImgPiscina;
  }
  //Get Images from Wedding 
  get ImgSlideMatrimonio():SlidesInterface[]{
    return this.swipeService.SwipeMatrimonio;
  }
  //Get Images from lodging
  get ImgSlideHospedaje():SlidesInterface[]{
    return this.swipeService.SwipeHospedaje;
  }
  //Get Images from Event
  get ImgSlideEvento():SlidesInterface[]{
    return this.swipeService.SwiperEventos;
  }

  constructor(private dataService:DataService ,private swipeService:SwiperData){}

}
