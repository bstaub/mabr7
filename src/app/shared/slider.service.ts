import { Injectable, isDevMode } from '@angular/core';
import { Slide } from '../models/Slide';
import { SettingsService } from './settings.service';



@Injectable({
  providedIn: 'root'
})
export class SliderService {

  slider: Slide[];
  url: string;

  constructor(private settingsService: SettingsService) {

    if (this.isDevMode()) {
      this.url = 'http://localhost:4200';
    } else {
      this.url = `${this.settingsService.getSettings().protocol}${this.settingsService.getSettings().domainName}`;
    }

    this.slider = [
      {
        image: 'assets/slider/slider1_guetzli.jpeg', // https://picsum.photos/2560/500?random&t=${Math.random()
        title: 'Photoapparate',
        text: 'Schiesse die besten Photos mit unseren Digitalkameras',
        link: `${this.url}/produkte/list?category=Fotoapparate`,
      },
      {
        image: 'assets/slider/slider2_guetzli.jpeg',
        title: 'Gartenzubehör und Gartenartikel',
        text: 'Alles für den Garten',
        link: `${this.url}//produkte/list?category=Gartenzubeh%C3%B6r`,
      },
      {
        image: 'assets/slider/slide_sonnenbrillen.jpg',
        title: 'Sonnenbrillen',
        text: 'Die neusten Brillenmodelle passend zu den Jahrezeiten',
        link: `${this.url}//produkte/list?category=Sonnenbrillen`,
      },
      {
        image: 'assets/slider/laedeli_mydeer_opt.jpg',
        title: 'Stoff & Kuscheltierli',
        text: 'Ein passendes Geschenk zu jeder Jahreszeit',
        link: `${this.url}/produkte/list?category=Maileg%20Tierchen`,
      },
    ];

  }

  getAllSlides() {
    return this.slider;
  }

  isDevMode(): boolean {
    if (isDevMode()) {
      return true;
    }
  }
}
