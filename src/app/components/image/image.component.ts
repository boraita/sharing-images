import { Component, OnInit, Input } from '@angular/core';

import { ImageModel } from 'src/app/shared/models/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: ImageModel;

  constructor() {}

  ngOnInit() {}
}
