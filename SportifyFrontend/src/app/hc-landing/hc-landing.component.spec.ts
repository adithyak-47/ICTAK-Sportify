import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcLandingComponent } from './hc-landing.component';

describe('HcLandingComponent', () => {
  let component: HcLandingComponent;
  let fixture: ComponentFixture<HcLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
