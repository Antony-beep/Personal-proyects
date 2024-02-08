import { Injectable } from '@angular/core';
import { DataHeader, SlidesInterface } from '../interfaces/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
    console.log('Servicio Inicializado');
  }
  private headerNav:DataHeader[]=[
    {
      titulo:'Inicio',
      rutascroll:'#chefs'
    },
    {
      titulo:'Espacio Recreativo',
      rutascroll:'#chefs'
    },
    {
      titulo:'Servicios',
      rutascroll:'#chefs'
    },
    {
      titulo:'Contactanos',
      rutascroll:'#chefs'
    }
  ]
//Array Iterable de carrousel del Espacio Recreativo
  private ImgSwipSalaJuegos:SlidesInterface[]=[
    {
      src:'../../assets/images/sala-juegos-1.jpg',
      height:400,
    },
    {
      src:'../../assets/images/sala-juegos-2.jpg',
      height:300
    },
    {
      src:'../../assets/images/sala-juegos-3.jpg',
      height:300
    }   
    
  ]
    
  private ImgSwipJuegosAire:SlidesInterface[] = [
    {
      src:'../../assets/images/aire-libre2.jpg',
      height:400
    },
    {
      src:'../../assets/images/aire-libre.jpg',
      height:400
    },
    {
      src:'../../assets/images/aire-libre3.jpg',
      height:400
    }
    
  ]

  private ImgSwipLaguna:SlidesInterface[] = [
    {
      src:'../../assets/images/laguna1.jpg',
      height:400,
    },
    {
      src:'../../assets/images/laguna2.jpg',
      height:400,
    },
    {
      src:'../../assets/images/laguna3.jpg',
      height:400,
    }
  ]

  private ImgSwipPiscina:SlidesInterface[] = [
    {
      src:'../../assets/images/piscina1.jpg',
      height:400,
    },
    {
      src:'../../assets/images/piscina2.jpg',
      height:400,
    },
    {
      src:'../../assets/images/piscina3.jpg',
      height:400,
    },
  ]


  get dataTitulo():DataHeader[]{
    return [...this.headerNav];
  }
  
 // Obtener imagenes de la sala de Juegos 
  get SwiperImgSala():SlidesInterface[]{  
    return [...this.ImgSwipSalaJuegos];
  }

  //Obtener images juegos al aire libre
  get SwiperImgJuegosA():SlidesInterface[]{
    return [...this.ImgSwipJuegosAire];
  } 
  //Obtener images piscina
  get SwiperImgLaguna():SlidesInterface[]{
    return [...this.ImgSwipLaguna];
  }
  //Obtener imges piscina
  get SwiperImgPiscina():SlidesInterface[]{
    return [...this.ImgSwipPiscina];
  }

}
