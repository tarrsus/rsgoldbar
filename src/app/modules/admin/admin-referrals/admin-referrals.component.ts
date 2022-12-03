import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ReferralService } from 'src/app/shared/referral.service';

@Component({
  selector: 'app-admin-referrals',
  templateUrl: './admin-referrals.component.html',
  styleUrls: ['./admin-referrals.component.sass']
})
export class AdminReferralsComponent implements OnInit {


  referralCodeForm = new FormGroup({
    code: new FormControl()
  });


  constructor(private router: Router, private referralService: ReferralService) { }

  ngOnInit(): void {
    this.getReferrals(1);
  }


  loading = false;
  displayedColumns: string[] = ['_id', 'code', 'dateCreated', 'lastUpdated', 'view', 'edit'];
  data = [];
  page: number = 1;
  total: number;
  selected = null;
  public getReferrals(page: number) {
    if (!isNaN(page)) {
      this.loading = true;
      this.referralService.getReferrals(page).subscribe(response => {
        this.total = response.totalCount;
        this.page = page;
        this.loading = false;
        this.data = response.referrals;
      });
    }
  }

  public updateRefCode() {
    if (this.selected) {
      this.referralService.updateReferral(this.selected, this.referralCodeForm.getRawValue()).subscribe(response => {
        this.getReferrals(this.page);
      })
    } else {
      this.referralService.addReferral(this.referralCodeForm.getRawValue()).subscribe(response => {
        this.getReferrals(this.page);
      })
    }
  }

  public onAction($event) {
    switch ($event.action) {
      case 'edit':
        this.selected = $event.element._id;
        this.referralCodeForm.get('code').patchValue($event.element.code);
        break;
      case 'view':
        this.router.navigate([`/admin/referrals/${$event.element._id}`]);
        break;
    }
  }

  public reset() {
    this.referralCodeForm.get('code').patchValue('');
    this.selected = null;
  }
}
