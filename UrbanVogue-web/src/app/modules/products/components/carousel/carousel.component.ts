import {Component, Input} from '@angular/core';
import {Image} from "../../../../core/models/image";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() images: Image[] = [];

}