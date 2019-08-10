import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharingImagesComponent } from './sharing-images/sharing-images.component';

const routes: Routes = [{ path: '', component: SharingImagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharingImagesRoutingModule {}
