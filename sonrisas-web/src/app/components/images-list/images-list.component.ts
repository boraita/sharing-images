import { Component, OnInit } from '@angular/core';

import { ImagesService } from '@services/images.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  breakpoint;
  images;
  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.images = this.imageService.getImageList();
    this.breakpoint = window.innerWidth < 400 ? 2 : window.innerWidth < 960 ? 2 : 3;
  }

  onResize() {
    this.breakpoint = window.innerWidth < 400 ? 2 : window.innerWidth < 960 ? 2 : 3;
  }
}
