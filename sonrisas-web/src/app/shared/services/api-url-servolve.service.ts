import { Injectable } from '@angular/core';

import { AppConfService } from '../config/app-conf.service';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlServolveService {
  constructor(private settings: AppConfService) {}

  getPath(params) {
    if (params.length === 0) {
      console.log('wrong arguments to setUrls');
    }
    let url = params.slice(0, 1)[0];
    params.splice(1).map(urlParam => (url = url.replace(/%s/, urlParam)));
    return url;
  }
  resolveAPI(...params: Array<string | number>) {
    const url = this.getPath(params);
    return this.settings.baseApiUrl.concat(this.settings.defaultBaseApiUrl.concat(url));
  }
  resolve(...params: Array<string>) {
    const url = this.getPath(params);
    return this.settings.baseApiUrl.concat(url);
  }
}
