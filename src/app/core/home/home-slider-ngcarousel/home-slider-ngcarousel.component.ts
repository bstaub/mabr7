import { Component, OnInit } from '@angular/core';
import { Slide } from '../../../models/Slide';
import { SliderService } from '../../../shared/slider.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-slider-ngcarousel',
  templateUrl: './home-slider-ngcarousel.component.html',
  styleUrls: ['./home-slider-ngcarousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeSliderNgcarouselComponent implements OnInit {


  sliderdata: Slide[];

  constructor(private sliderService: SliderService,
              config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  ngOnInit() {
    this.sliderdata = this.sliderService.getAllSlides();
  }
}

