import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppConfService {
  public environment = window.location.hostname;
  public staticRoot = 'http://' + window.location.hostname + ':8080/';

  // Configuration urls
  public baseApiUrl = 'http://' + window.location.hostname + ':8080/';
  public defaultBaseApiUrl = 'api/';
}
