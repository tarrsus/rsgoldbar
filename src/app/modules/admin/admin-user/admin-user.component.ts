import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { getUser, isEmptyOrNull } from 'src/app/shared/utils';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.sass']
})
export class AdminUserComponent implements OnInit {
  id = this.route.snapshot.params.id;
  user = null;
  userForm = new FormGroup({
    groupId: new FormControl(1, [Validators.required])
  })

  pgsArray = new FormArray([]);
  paymentGatewaysForm = new FormGroup({
    pgs: this.pgsArray
  })
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this._getUser();
    this.fetchPaymentGateways();
    this.getUserIpsPage(1);
    this.getUserRsnsPage(1);
   }

  public save(data: any) {
    this.userService.updateUserGroup(this.id, data).subscribe(response => {
      this._getUser();
    })
  }

  public _getUser() {
    this.userService.getUser(this.id).subscribe(response => {
      this.user = response;
      this.userForm.controls.groupId.patchValue(response.groupId); 
    });
  }

  public fetchPaymentGateways() {
    while (this.pgsArray.length > 0) {
      this.pgsArray.removeAt(0);
    }
    forkJoin([
      this.userService.getUserPaymentGateways(this.id),
      this.userService.getUserLimits(this.id)
    ]).subscribe(responses => {
      responses[0].forEach(element => {
        const found = responses[1].find(x => `${x.paymentGateway._id}` === `${element.paymentGateway._id}`);
        const left = found ? found.left : 0;
        const formGroup = new FormGroup({
          limit: new FormControl(element.limit),
          left: new FormControl({ value: left, disabled: true }),
          name: new FormControl({ value: element.paymentGateway.name, disabled: true }),
          paymentGatewayId: new FormControl({ value: element.paymentGateway._id, disabled: true })
        })
        this.pgsArray.push(formGroup)
      });
    });
  }

  public getPgs(): any {
    return this.paymentGatewaysForm.controls['pgs'] as any;
  }

  public updatePgs() {
    this.userService.updateUserPaymentGateways(this.id, this.paymentGatewaysForm.getRawValue()).subscribe(result => {
      this.fetchPaymentGateways();
    });
  }



  userIpsDisplayedColumns: string[] = ['ipAddress', 'blacklisted', 'dateCreated', 'edit'];
  userIps = [];
  userIpPage: number = 1;
  totalIps: number;
  loading: boolean;

  userRsnsDisplayedColumns: string[] = ['rsn', 'dateCreated'];
  userRsns = [];
  userRsnPage: number = 1;
  totalRsns: number; 
  getUserIpsPage(page: number) {
    if (!isNaN(page)) {
      this.loading = true;
      this.userService.getUserIps(this.id, page).subscribe(response => {
        this.totalIps = response.totalCount;
        this.userIpPage = page;
        this.loading = false;
        this.userIps = response.userIps;
        this.userIps = this.userIps.map(x => {
          x.blacklisted = x.blacklisted ? 'Yes' : 'No';
          return x
        })
      });
    }
  }

  getUserRsnsPage(page: number) {
    if (!isNaN(page)) {
      this.loading = true;
      this.userService.getUserRsns(this.id, page).subscribe(response => {
        this.totalRsns = response.totalCount;
        this.userRsnPage = page;
        this.loading = false;
        this.userRsns = response.userRsns;
      });
    }
  }
 
  public onActionIps($event) {
    if ($event !== null && $event.element !== null) {
      const { action } = $event;
      switch (action) {
        case 'edit':
          const userIpAddressId = $event.element._id;
          this.userService.updateUserIp(this.id, userIpAddressId).subscribe(response => {
            this.getUserIpsPage(this.userIpPage);
          })
          break;
      }
    }
  } 
}
