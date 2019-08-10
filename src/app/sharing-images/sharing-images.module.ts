import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharingImagesRoutingModule } from './sharing-images-routing.module';
import { ImagesListComponent } from './images-list/images-list.component';
import { ImageComponent } from './image/image.component';
import { SharingImagesComponent } from './sharing-images/sharing-images.component';
import { SharingHeaderComponent } from './sharing-header/sharing-header.component';

@NgModule({
  declarations: [
    ImagesListComponent,
    ImageComponent,
    SharingImagesComponent,
    SharingHeaderComponent
  ],
  imports: [
    CommonModule,
    SharingImagesRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharingImagesModule {}
