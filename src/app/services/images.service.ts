import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ImageModel } from '../shared/models/image.model';

@Injectable()
export class ControlReportingService {
  constructor(private httpClient: HttpClient) {}

  public getImageList(): Observable<ImageModel[]> {
    return of([]);
  }
}
