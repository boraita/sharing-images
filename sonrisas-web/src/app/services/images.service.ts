import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ImageModel } from '../shared/models/image.model';
import { ApiUrlServolveService } from '../shared/services/api-url-servolve.service';
import { ApiResources } from '../shared/utils/resources-urls';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  constructor(private httpClient: HttpClient, private apiResolve: ApiUrlServolveService) {}

  public getImageList(): Observable<ImageModel[]> {
    const url = this.apiResolve.resolveAPI(ApiResources.IMAGES_LIST);
    return this.httpClient
      .get(url)
      .pipe(map((images: ImageModel[]) => images.map(image => ({ url: image.url, size: image.size, date: new Date(image.date) }))));
  }
}
