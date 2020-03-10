import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAccorianComponent } from './first-accorian.component';

describe('FirstAccorianComponent', () => {
  let component: FirstAccorianComponent;
  let fixture: ComponentFixture<FirstAccorianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAccorianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAccorianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
