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
        image: `assets/slider/slider1_guetzli.jpeg`,
        title: 'Photoapparate',
        text: 'Schiesse die besten Photos mit unseren Digitalkameras',
        link: 'http://localhost:4200/produkte/detail/9H9kq3pUEELAS8GYdsPB',
      },
      {
        image: `assets/slider/slider2_guetzli.jpeg`,
        title: 'Herbstmomente',
        text: 'Gutschein für Übernachten auf dem Bauernhof',
        link: 'http://localhost:4200/produkte/detail/Buwxv9NLdMae3yM5pilA',
      },
      {
        image: `assets/slider/slide_sonnenbrillen.jpg`,
        title: 'Sonnenbrillen',
        text: 'Die neusten Brillenmodelle passend zu den Jahrezeiten',
        link: 'http://localhost:4200/produkte/detail/YQyZmAeqMKseNF4EEsZ7',
      },
      {
        image: `assets/slider/slide_computer.jpg`,  // https://picsum.photos/2560/500?random&t=${Math.random()}
        title: 'Apple Macbook Air',
        text: 'Apple Lifestyle Produkte',
        link: 'https://www.apple.com/chde/macbook-air/',
      },
    ];

  }


  getAllSlides() {
    return this.slider;
  }
}
