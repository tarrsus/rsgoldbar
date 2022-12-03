import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustpilotReviewComponent } from './trustpilot-review.component';

describe('TrustpilotReviewComponent', () => {
  let component: TrustpilotReviewComponent;
  let fixture: ComponentFixture<TrustpilotReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustpilotReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustpilotReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
