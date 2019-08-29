import { Component, Input, OnInit } from '@angular/core';

import { ImageModel } from 'app/shared/models/image.model';
import { ImagesService } from '@services/images.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  imageResized: string;
  @Input() image: ImageModel;

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.imageService.getThumbnailImage(this.image).subscribe(imageurl => (this.imageResized = imageurl));
  }

  downloadImage() {
    this.imageService.downloadImage(this.image.idMap).subscribe();
  }
}
