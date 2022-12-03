import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getCurrencyConverted, getCurrencySymbol, getCurrentCurrency, getPaymentGateways, isEmptyOrNull, round, sendLiveChatMessage } from 'src/app/shared/utils';
import { Meta, Title } from '@angular/platform-browser';
import { WatcherService } from 'src/app/shared/watcher.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.sass']
})
export class BuyComponent implements OnInit {
  getCurrencySymbol = getCurrencySymbol;
  getCurrencyConverted = getCurrencyConverted;
  currency = getCurrentCurrency() || 'USD';

  lessThanStock = false;
  stockAmount = 0;
  price = 0;
  url = this.router.url;
  isOsrs = this.url.indexOf('oldschool') >= 0;
  amount = 0;
  total = 0;
  rsn = '';
  // minAmount = this.isOsrs ? 5 : 50;
  selected = 'Crypto';

  selectedPaymentGateway = null;
  selectedPaymentGatewayName = null;
  paymentGateways = getPaymentGateways();
  stocks;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private watcher: WatcherService, private title: Title, private meta: Meta, private router: Router, private order: OrderService, private snackBar: MatSnackBar) {
    this.stocks = this.route.snapshot.data.stock;
  }


  ngOnInit() {
    this.isOsrs = this.url.indexOf('oldschool') >= 0;
    this.selectPaymentGateway(this.selected);
    this.watcher.getCurrency().subscribe(r => {
      this.currency = r;
      this.total = round(this.amount * this.price);
    });
  }

  public onSelect($event) {
    this.selected = $event.name;
    this.selectPaymentGateway(this.selected);
  }

  public buy() {
    if (isEmptyOrNull(this.rsn)) {
      this.snackBar.open('RSN cannot be empty', 'Dismiss', {
        duration: 5000,
      });
      return;
    }

    if (isEmptyOrNull(this.amount)) {
      this.snackBar.open('Amount cannot be empty', 'Dismiss', {
        duration: 5000,
      });
      return;
    }

    if (isNaN(this.amount)) {
      this.snackBar.open('Amount is not a number', 'Dismiss', {
        duration: 5000,
      });
      return;
    }

    if (this.amount > this.stockAmount || this.stockAmount <= 0) {
      this.snackBar.open('Cannot buy more than stock', 'Dismiss', {
        duration: 5000,
      });
      return;
    }

    if (this.amount <= 0) {
      this.snackBar.open('Amount cannot be negative', 'Dismiss', {
        duration: 5000,
      });
      return;
    }

    // if (this.amount < this.minAmount) {
    //   this.snackBar.open(`Minimum order: ${this.minAmount}M`, 'Dismiss', {
    //     duration: 5000,
    //   });
    //   return;
    // }

    const total = +round(this.amount * this.price);
    if (total <= 0 || isNaN(total)) {
      this.snackBar.open('Total amount calculated is incorrect', 'Dismiss', {
        duration: 5000,
      });
      return;
    }



    const payload = {
      gold: {
        type: this.isOsrs ? 'oldschool' : 'runescape3',
        units: +this.amount,
        rsn: this.rsn,
      },
      currency: this.currency,
      // email: this.email,
      paymentGatewayId: this.selectedPaymentGateway,
      refCode: localStorage.getItem('ref')
    };

    switch (this.selected) {
      case 'Crypto':
      case 'Mastercard':
      case 'Visa':
      case 'Skrill':
      case 'Klarna':
      case 'Trustly':
        this.snackBar.open('Successfully placed order, you will now be redirected to our payment gateway', 'Dismiss', {
          duration: 5000,
        });

        this.order.addOrder(payload).subscribe(result => {
          if (result.redirect_url) {
            const newTab = window.open();
            newTab.location.href = result.redirect_url;
          }
        });
        break;
      default:
        let sentence = `Hello,\nI would to order ${this.amount}M ${this.isOsrs ? 'OSRS' : 'RS3'}\nRSN: ${this.rsn}\nPayment gateway: ${this.selectedPaymentGatewayName}`;
        sendLiveChatMessage(sentence);
        break;
    }
  }

  public changed(type, $event) {
    if (type === 'amount') {
      this.amount = $event;
      this.total = round(this.amount * this.price);
    } else {
      this.total = $event;
      this.amount = round(this.total / this.price);
    }
  }

  public get feesPercentage() {
    if (!this.selectedPaymentGateway) {
      return 0;
    }
    const paymentGateway = this.paymentGateways.find(x => x.paymentGatewayId === this.selectedPaymentGateway)
    return paymentGateway ? paymentGateway.fees : 0;
  }

  public get fees() {
    return this.feesPercentage === 0 ? 0 : +round(this.subtotal * ((this.feesPercentage) / 100));
  }

  public get subtotal(): number {
    return this.total;
  }

  public get totalInvoice(): number {
    return round(this.fees + this.subtotal)
  }

  public selectPaymentGateway(name: string) {
    if (this.stocks) {
      this.stockAmount = this.isOsrs ? this.stocks.osrs.units : this.stocks.rs3.units;
      this.price = this.isOsrs ? this.stocks.osrs.selling : this.stocks.rs3.selling;;
      this.total = round(this.amount * this.price);
      this.selectedPaymentGateway = this.paymentGateways.find(x => x.name === name).paymentGatewayId;
      this.selectedPaymentGatewayName = this.paymentGateways.find(x => x.name === name).name;
    }
  }

  public redirect(path: string) {
    this.router.navigate([`/buy/${path}`])
  }
}
