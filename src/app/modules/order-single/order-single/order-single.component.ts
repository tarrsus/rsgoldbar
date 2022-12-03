import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { getCurrencySymbol, sendLiveChatMessage } from 'src/app/shared/utils';

@Component({
  selector: 'app-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.sass']
})
export class OrderSingleComponent implements OnInit {
  orderId = this.route.snapshot.params.orderId;
  orderItem: any;
  dataSource: MatTableDataSource<any>;
  orderStatus = '-';
  constructor(private route: ActivatedRoute, private router: Router, private order: OrderService) {
  }

  ngOnInit() {
    this.order.getSingleOrder(this.orderId).subscribe(result => {
      this.orderItem = result
      setTimeout(() => {
        this.startChat();
        this.router.navigate(['/']);
      }, 1000);
    });
  }

  public startChat() {
    if (this.orderItem) {
      let sentence = `Hello,\nMy order ID is ${this.orderItem.orderId}`;
      if (this.orderItem.account) {

      } else {
        sentence += `\n${this.orderItem.gold.units}M of ${this.orderItem.gold.server === 1 ? 'OSRS' : 'RS3'} gold\nPayment gateway: ${this.orderItem.paymentGateway.name}\nRSN: ${this.orderItem.gold.rsn}\nSub-total: ${this.orderItem.invoice.subtotal}${getCurrencySymbol(this.orderItem.currency)}\nFees: ${this.orderItem.invoice.fee}${getCurrencySymbol(this.orderItem.currency)}\nTotal invoice (with discount): ${this.orderItem.invoice.total}${getCurrencySymbol(this.orderItem.currency)}\nCoupon used: ${this.orderItem.coupon ? this.orderItem.coupon.code : 'N/A'}\nCurrency: ${this.orderItem.currency}`;
      }

      sendLiveChatMessage(sentence);
    }
  }
}