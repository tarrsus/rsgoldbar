import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trustpilot-review',
  templateUrl: './trustpilot-review.component.html',
  styleUrls: ['./trustpilot-review.component.sass']
})
export class TrustpilotReviewComponent implements OnInit {
  @Input() review;

  constructor() {}

  ngOnInit(): void {}
}
