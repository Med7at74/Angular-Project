import { Images } from './../images';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css'],
})
export class GalaryComponent {
  showImage: boolean = false;
  imgSrc: string = '';

  index: string = '';
  images: Images[] = [
    { img: './assets/images/poert1.png' },
    { img: './assets/images/port2.png' },
    { img: './assets/images/port3.png' },
    { img: './assets/images/poert1.png' },
    { img: './assets/images/port2.png' },
    { img: './assets/images/port3.png' },
  ];

  toggleImage() {
    this.showImage = !this.showImage;
    console.log('hi');
  }
  getIndex(i: any) {
    let index = i;
    // console.log(index.i);
    // console.log(this.images[2].img);
    // console.log(this.images[index.i].img);
    this.imgSrc = this.images[index.i].img;
    console.log(this.imgSrc);
  }
}
