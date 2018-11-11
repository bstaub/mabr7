import { Injectable } from '@angular/core';
import { Slide } from '../../models/Slide';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  slider: Slide[];

  constructor() {

    this.slider = [
      {
        image: `https://picsum.photos/2560/500?random&t=${Math.random()}`,
        title: 'Apple Spielzeuge',
        text: 'Apple Lifestyle Produkte',
        link: 'http://localhost:4200/produkte/detail/eVR3Tj9bRLIAsjD9CrQ6',
      },
      {
        image: `https://picsum.photos/2560/500?random&t=${Math.random()}`,
        title: 'Mac Book Air',
        text: 'Mac Book Air, das neuste Model von Apple',
        link: 'http://localhost:4200/produkte/detail/dMCPQ1NYxKGCa5yvvaII',
      },
      {
        image: `https://picsum.photos/2560/500?random&t=${Math.random()}`,
        title: 'Kaffee Plausch',
        text: 'Morgenstund hat Gold im Mund',
        link: 'https://www.alessi.com/ch_de/',
      },
      {
        image: `https://picsum.photos/2560/500?random&t=${Math.random()}`,
        title: 'Ipad Air',
        text: 'Hier das neue IPAD Air',
        link: 'http://localhost:4200/produkte/detail/eVR3Tj9bRLIAsjD9CrQ6',
      },
      {
        image: `https://picsum.photos/2560/500?random&t=${Math.random()}`,
        title: 'Winter Jacke',
        text: 'Hier der Produktbeschreib2 Winter Jacke',
        link: 'http://localhost:4200/produkte/detail/dMCPQ1NYxKGCa5yvvaII',
      },
      {
        image: `https://picsum.photos/2560/500?random&t=${Math.random()}`,
        title: 'Salewa Schuhe',
        text: 'Hier der Produktbeschreib3',
        link: 'https://www.salewa.com/de-ch',
      }
    ];

  }


  getAllSlides() {
    return this.slider;
  }
}
