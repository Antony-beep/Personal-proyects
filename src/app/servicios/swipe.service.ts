import { Injectable } from '@angular/core'; 
import { SlidesInterface } from '../interfaces/datos.interface';

@Injectable({
    providedIn:'root'
})

export class SwiperData {

    private ImgMatrimonios:SlidesInterface[]=[
        {
            src:'../../assets/images/matrimonio1.jpg',
            height:400
        },
        {
            src:'../../assets/images/matrimonio2.jpg',
            height:400
        },
        {
            src:'../../assets/images/matrimonio3.jpg',
            height:400
        },
        {
            src:'../../assets/images/matrimonio4.jpg',
            height:400
        },
        {
            src:'../../assets/images/matrimonio5.jpg',
            height:400
        }
        
    ]

    private ImgHospedaje:SlidesInterface[]=[
        {
            src:'../../assets/images/hospedaje1.jpg',
            height:400
        },
        {
            src:'../../assets/images/matrimonio1.jpg',
            height:400
        },
        {
            src:'../../assets/images/matrimonio1.jpg',
            height:400
        }
    ]

    private ImgEventos:SlidesInterface[]=[
        {
            src:'../../assets/images/matrimonio6.jpg',
            height:400
        },
        {
            src:'../../assets/images/matrimonio7.jpg',
            height:400
        },
        {
            src:'../../assets/images/matrimonio8.jpg',
            height:400
        }
    ]

    get SwipeMatrimonio():SlidesInterface[]{
        return [...this.ImgMatrimonios]
    }

    get SwipeHospedaje():SlidesInterface[]{
        return [...this.ImgHospedaje]
    }
    
    get SwiperEventos():SlidesInterface[]{
        return [...this.ImgEventos]
    }
}