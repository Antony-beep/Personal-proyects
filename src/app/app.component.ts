import { Component } from '@angular/core';
import { delay, elementAt } from 'rxjs';
import { __await } from 'tslib';
import { DataHeader } from './interfaces/datos.interface';
import { DataService } from './servicios/data.service';
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
 

  hideBurger(){ this.burger=false;this.cross=true;this.entrada=true;this.items=true;}
  closing(){ this.entrada=false;this.burger=true;this.cross=false; 
  }
  constructor(private dataService:DataService ){}

}
