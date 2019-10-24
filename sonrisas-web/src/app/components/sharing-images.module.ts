import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';

import { SharingImagesRoutingModule } from './sharing-images-routing.module';
import { ImagesListComponent } from './images-list/images-list.component';
import { ImageComponent } from './image/image.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ImagesListComponent, ImageComponent, OverviewComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharingImagesRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers: []
})
export class SharingImagesModule {}
