import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/shared/order.service';
import { isEmptyOrNull, getCurrencySymbol, getUser } from 'src/app/shared/utils';
import { UserService } from '../../user.service';
import { ReferralService } from '../../referral.service';

@Component({
  selector: 'app-common-orders',
  templateUrl: './common-orders.component.html',
  styleUrls: ['./common-orders.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CommonOrdersComponent implements OnInit {
  @Input() selfUser = false;
  @Input() referralHistory = false;
  @Input() referralId = '';
  isEmptyOrNull = isEmptyOrNull;
  getCurrencySymbol = getCurrencySymbol;
  columnsToDisplay = [
    'orderId',
    'tasks',
    'paymentGateway',
    'status',
    'total',
    'dates',
    'delivered',
    'view'
  ];

  expandedElement: any | null;
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);

  constructor(private referralService: ReferralService, private user: UserService) {
  }

  ngOnInit() {
    this.getPage(1);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  data = [];
  p: number = 1;
  total: number;
  loading: boolean;
  getPage(page: number) {
    this.loading = true;
    if (this.selfUser) {
      this.user.getUserOrders(getUser().id, page).subscribe(response => {
        this.total = response.totalCount;
        this.p = page;
        this.loading = false;

        this.data = response.orders;
        this.dataSource.data = response.orders;
      });
    }

    if (this.referralHistory && !isEmptyOrNull(this.referralId)) {
      this.referralService.getOrders(this.referralId, page).subscribe(response => {
        this.total = response.totalCount;
        this.p = page;
        this.loading = false;

        this.data = response.orders;
        this.dataSource.data = response.orders;
      });
    }
  }

  public isDefinedAndNotNull(input: any) {
    return !isEmptyOrNull(input) && Array.isArray(input) && input.length > 0;
  }
}

