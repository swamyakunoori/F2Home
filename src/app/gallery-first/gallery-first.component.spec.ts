import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFirstComponent } from './gallery-first.component';

describe('GalleryFirstComponent', () => {
  let component: GalleryFirstComponent;
  let fixture: ComponentFixture<GalleryFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
