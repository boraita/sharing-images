import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesListComponent } from './sharing-images/images-list/images-list.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sharing-images/sharing-images.module').then(
        m => m.SharingImagesModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
