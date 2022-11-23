import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCaptainsComponent } from './house-captains.component';

describe('HouseCaptainsComponent', () => {
  let component: HouseCaptainsComponent;
  let fixture: ComponentFixture<HouseCaptainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseCaptainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseCaptainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
