import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousels-first',
  templateUrl: './carousels-first.component.html',
  styleUrls: ['./carousels-first.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselsFirstComponent implements OnInit {

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
