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
        link: 'http://localhost:4200/produkte/detail/dMCPQ1NYxKGCa5yvvaII',
      },
      {
        image: `assets/slider/slider2_guetzli.jpeg`,
        title: 'Herbstmomente',
        text: 'Gutschein für Übernachten auf dem Bauernhof',
        link: 'http://localhost:4200/produkte/detail/dMCPQ1NYxKGCa5yvvaII',
      },
      {
        image: `assets/slider/slide_sonnenbrillen.jpg`,
        title: 'Sonnenbrillen',
        text: 'Die neusten Brillenmodelle passend zu den Jahrezeiten',
        link: 'http://localhost:4200/produkte/detail/eVR3Tj9bRLIAsjD9CrQ6',
      },
      {
        image: `assets/slider/slide_computer.jpg`,  // https://picsum.photos/2560/500?random&t=${Math.random()}
        title: 'Apple Macbook Air',
        text: 'Apple Lifestyle Produkte',
        link: 'http://localhost:4200/produkte/detail/eVR3Tj9bRLIAsjD9CrQ6',
      },
    ];

  }


  getAllSlides() {
    return this.slider;
  }
}
