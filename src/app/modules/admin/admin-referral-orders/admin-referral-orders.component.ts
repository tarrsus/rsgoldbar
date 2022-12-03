import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BasePageComponent } from "src/app/core/base-page.component";
import { ReferralService } from "src/app/shared/referral.service";

@Component({
  selector: 'app-admin-referral-orders',
  templateUrl: './admin-referral-orders.component.html',
  styleUrls: ['./admin-referral-orders.component.sass']
})
export class AdminReferralOrdersComponent extends BasePageComponent implements OnInit {
  id = this.route.snapshot.params.id;
  statistics = null;
  constructor(private route: ActivatedRoute, private referralService: ReferralService) {
    super();
  }

  ngOnInit() {
    this.referralService.getStatistics(this.id).subscribe(response => {
      this.statistics = response;
    });
  }
}
