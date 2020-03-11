import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselsFirstComponent } from './carousels-first.component';

describe('CarouselsFirstComponent', () => {
  let component: CarouselsFirstComponent;
  let fixture: ComponentFixture<CarouselsFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselsFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
