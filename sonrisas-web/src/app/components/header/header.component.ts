import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() lastNumberSelected = new EventEmitter<number>();
  numberLasts = [-1, 10, 20, 30, 40];
  selected = -1;

  setNumberShowing() {
    this.lastNumberSelected.next(this.selected);
  }
}
