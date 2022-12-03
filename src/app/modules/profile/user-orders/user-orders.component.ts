import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BasePageComponent } from 'src/app/core/base-page.component';
import { UserService } from 'src/app/shared/user.service';
import { getCurrencyConverted, getCurrencySymbol, getCurrentCurrency, getUser } from 'src/app/shared/utils';
import { WatcherService } from 'src/app/shared/watcher.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.sass']
})
export class UserOrdersComponent extends BasePageComponent implements OnInit {
  displayedColumns: string[] = ['orderId', 'total', 'server', 'subServer', 'description', 'dateCreated', 'lastUpdated'];
  data = [];

  p: number = 1;
  total: number;
  loading: boolean;
  pgs = [];

  getCurrencySymbol = getCurrencySymbol;
  getCurrencyConverted = getCurrencyConverted;
  currency = getCurrentCurrency() || 'USD';
  constructor(private user: UserService, private router: Router, private watcher: WatcherService) {
    super();
  }

  ngOnInit() {
    // this.getPage(1);
    this.user.getUserLimits(getUser().id).subscribe(response => {
      this.pgs = response;
    })
    this.watcher.getCurrency().subscribe(r => {
      this.currency = r;
    });
  }


  getPage(page: number) {
    if (!isNaN(page)) {
      this.loading = true;
      this.user.getUserOrders(getUser().id, page).pipe(takeUntil(this.componentDestroyed$)).subscribe(response => {
        this.total = response.totalCount;
        this.p = page;
        this.loading = false;
        this.data = response.orders;
      });
    }
  }
}
