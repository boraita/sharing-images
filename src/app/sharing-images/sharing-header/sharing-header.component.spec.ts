import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingHeaderComponent } from './sharing-header.component';

describe('SharingHeaderComponent', () => {
  let component: SharingHeaderComponent;
  let fixture: ComponentFixture<SharingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
