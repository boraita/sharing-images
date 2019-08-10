import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingImagesComponent } from './sharing-images.component';

describe('SharingImagesComponent', () => {
  let component: SharingImagesComponent;
  let fixture: ComponentFixture<SharingImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
