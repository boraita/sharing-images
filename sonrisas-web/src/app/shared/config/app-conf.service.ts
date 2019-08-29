import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppConfService {
  public environment = window.location.hostname;
  public staticRoot = 'http://' + window.location.hostname + ':2704/';

  // Configuration urls
  public baseApiUrl = 'http://' + window.location.hostname + ':2704/';
  public defaultBaseApiUrl = 'api/';
}
