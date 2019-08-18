import { Component, OnInit } from '@angular/core';

import { ImagesService } from '@services/images.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html'
})
export class ImagesListComponent implements OnInit {
  breakpoint;
  images;
  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.images = this.imageService.getImageList();
    this.breakpoint = window.innerWidth < 400 ? 2 : window.innerWidth < 960 ? 2 : 3;
    // for (let index = 1; index < 51; index++) {
    //   this.images.push(index);
    // }
  }

  onResize(event) {
    this.breakpoint = window.innerWidth < 400 ? 2 : window.innerWidth < 960 ? 2 : 3;
  }
}
