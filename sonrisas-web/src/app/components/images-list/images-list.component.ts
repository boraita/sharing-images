import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { ImagesService } from '@services/images.service';
import { ImageModel } from '@shared/models/image.model';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit, OnChanges, OnDestroy {
  breakpoint;
  images: Array<ImageModel>;
  imagesFiltered: Array<ImageModel>;
  imagesListSubscriptor: Subject<ImageModel[]> = new Subject<ImageModel[]>();
  @Input() showNumberImages = -1;
  constructor(private imageService: ImagesService) { }

  ngOnInit() {
    this.initImagesSubcriptor();
    this.breakpoint = window.innerWidth < 400 ? 2 : window.innerWidth < 960 ? 2 : 3;
  }
  ngOnDestroy(): void {
    if (this.imagesListSubscriptor) {
      this.imagesListSubscriptor.complete();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentItem: SimpleChange = changes.showNumberImages;
    if (currentItem.currentValue) {
      this.imagesFiltered = this.showNumberImages === -1 ? [...this.images] : [...this.images].splice(0, this.showNumberImages);
    }
  }
  initImagesSubcriptor() {
    this.imagesListSubscriptor
      .pipe(switchMap(() => this.imageService.getImageList().pipe(map(images => (this.images = images)))))
      .subscribe();
    this.imagesListSubscriptor.next();
  }

  getImages() {
    this.imagesListSubscriptor.next();
  }

  onResize() {
    this.breakpoint = window.innerWidth < 400 ? 2 : window.innerWidth < 960 ? 2 : 3;
  }
}
