import { Injectable } from '@angular/core';
import { DataHeader } from '../interfaces/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
    console.log('Servicio Inicializado');
  }
  public headerNav:DataHeader[]=[
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

  get dataTitulo():DataHeader[]{
    return [...this.headerNav];
  }

}
