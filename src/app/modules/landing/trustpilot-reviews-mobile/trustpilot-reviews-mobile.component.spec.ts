import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustpilotReviewsMobileComponent } from './trustpilot-reviews-mobile.component';

describe('TrustpilotReviewsMobileComponent', () => {
  let component: TrustpilotReviewsMobileComponent;
  let fixture: ComponentFixture<TrustpilotReviewsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustpilotReviewsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustpilotReviewsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
