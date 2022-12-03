import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/shared/order.service';
import {
  isEmptyOrNull,
  isAdmin,
  getCurrencySymbol,
  isWorker
} from 'src/app/shared/utils';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class AdminOrdersComponent implements OnInit {
  getCurrencySymbol = getCurrencySymbol;
  isEmptyOrNull = isEmptyOrNull;
  columnsToDisplay = [
    'orderId',
    // 'uuid',
    'tasks',
    'user',
    'ipAddress',
    'paymentGateway',
    'status',
    // 'rsn',
    'total',
    // 'units',
    // 'type',
    'dates',
    'delivered',
    'view',
    'edit'
  ];
  rates: { rs3: number; osrs: number };

  expandedElement: any | null;
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  ordersForm = new FormGroup({
    filterBy: new FormControl(null),
    filter: new FormControl('')
  });
  constructor(private order: OrderService) {}

  ngOnInit() {
    this.getPage(1);
    if (isAdmin() || isWorker()) {
      this.columnsToDisplay.push('delete');
    }

    this.order.getRates().subscribe(response => {
      this.rates = response.result;
    });
  }

  public edit($event, orderId: string) {
    this.order.updateOrder(orderId).subscribe(_ => {
      this.getPage(1);
    });
  }

  public delete($event, orderId: string) {
    this.order.deleteOrder(orderId).subscribe(_ => {
      this.getPage(1);
    });
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
    this.order.getOrders(page, this.filterCriteria).subscribe(response => {
      this.total = response.totalCount;
      this.p = page;
      this.loading = false;

      this.data = response.orders;
      this.dataSource.data = response.orders;
    });
  }

  public getRates() {
    this.order.getRates().subscribe(response => {
      this.rates = response.result;
      console.log(response.result);
    });
  }

  public setRate(curr, newRate) {
    this.order.setRate(curr, newRate).subscribe(response => {
      this.getRates();
    });
  }

  public search(data: any) {
    this.getPage(1);
  }

  public get filterCriteria(): string {
    const filterBy = this.ordersForm.get('filterBy').value;
    const filter = this.ordersForm.get('filter').value;
    if (isEmptyOrNull(filterBy) || filterBy === 'null') {
      return '';
    }
    return `&filterBy=${filterBy}&filter=${filter}`;
  }
}
