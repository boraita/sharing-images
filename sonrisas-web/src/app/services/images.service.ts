import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';

import { ImageModel } from '../shared/models/image.model';
import { ApiUrlServolveService } from '../shared/services/api-url-servolve.service';
import { ApiResources } from '../shared/utils/resources-urls';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  constructor(private httpClient: HttpClient, private apiResolve: ApiUrlServolveService, private sanitizer: DomSanitizer) {}

  getImageList(): Observable<ImageModel[]> {
    const url = this.apiResolve.resolveAPI(ApiResources.IMAGES_LIST);
    return this.httpClient.get(url).pipe(
      map((images: ImageModel[]) =>
        images.map((image: ImageModel) => {
          return {
            idMap: image.idMap,
            name: image.name,
            size: image.size,
            date: new Date(image.date)
          };
        })
      )
    );
  }
  downloadImage(name: string) {
    const url = this.apiResolve.resolveAPI(ApiResources.DOWNLOAD_IMAGE, name);
    return this.httpClient.get(url, { responseType: 'blob' }).pipe(map(nameImage => saveAs(nameImage, name)));
  }
  getThumbnailImage(image: ImageModel): Observable<any> {
    const url = this.apiResolve.resolveAPI(ApiResources.GET_THUMBNAIL, image.idMap);
    return this.httpClient
      .get(url, { responseType: 'arraybuffer' })
      .pipe(map(nameImage => 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(nameImage)))));
  }
}
