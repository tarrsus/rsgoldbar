import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrustpilotReviewsComponent } from './trustpilot-reviews/trustpilot-reviews.component';
import { TrustpilotReviewComponent } from './trustpilot-review/trustpilot-review.component';
import { TrustpilotReviewsMobileComponent } from './trustpilot-reviews-mobile/trustpilot-reviews-mobile.component';

@NgModule({
  declarations: [LandingComponent, TrustpilotReviewsComponent, TrustpilotReviewComponent, TrustpilotReviewsMobileComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule]
})
export class LandingModule {}
