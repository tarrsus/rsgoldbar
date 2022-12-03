import { Component, OnInit } from '@angular/core';
import { round } from 'mathjs';
import { StockService } from 'src/app/shared/stock.service';
import { OrderService } from 'src/app/shared/order.service';
import {
  getCurrencyConverted,
  getCurrencySymbol,
  getCurrentCurrency,
  isEmptyOrNull,
  sendLiveChatMessage
} from 'src/app/shared/utils';
import { WatcherService } from 'src/app/shared/watcher.service';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.sass']
})
export class SwapComponent implements OnInit {
  type = 'osrs';
  rsn = '';
  amount = 0;
  osrsBuying = 0;
  rs3Buying = 0;
  getCurrencyConverted = getCurrencyConverted;
  getCurrencySymbol = getCurrencySymbol;
  currency = getCurrentCurrency() || 'USD';
  rates: { rs3: number; osrs: number } = {
    rs3: 0,
    osrs: 0
  };
  constructor(
    private stockService: StockService,
    private order: OrderService,
    private watcher: WatcherService
  ) {}

  ngOnInit() {
    this.watcher.getCurrency().subscribe(r => {
      this.currency = r;
    });

    this.stockService.getStock().subscribe(response => {
      if (!isEmptyOrNull(response)) {
        this.osrsBuying = response.osrs.buying;
        this.rs3Buying = response.rs3.buying;
      }
    });

    this.order.getRates().subscribe(response => {
      this.rates = response.result;
    });
  }

  rsn1 = '';
  rsn2 = '';
  amount1 = 0;
  amount2 = 0;

  public openLiveChat(
    flag: boolean,
    type: string,
    amount: number,
    rsn: string
  ) {
    if (flag) {
      return;
    }
    const w: any = window;
    let to = type === 'OSRS' ? 'RS3' : 'OSRS';

    if (type === 'OSRS') {
      sendLiveChatMessage(
        `Hello, I would like to swap ${round(amount)}M ${type} for ${
          amount * this.rates.rs3
        } ${to}\nRSN: ${rsn}`
      );
    } else {
      sendLiveChatMessage(
        `Hello, I would like to swap ${round(amount)}M ${type} for ${
          amount * this.rates.osrs
        } ${to}\nRSN: ${rsn}`
      );
    }
  }

  public disabled1() {
    return !this.amount1 || this.amount1 <= 0;
  }
  public disabled2() {
    return !this.amount2 || this.amount2 <= 0;
  }

  public getRates() {
    this.order.getRates().subscribe(response => {
      this.rates = response.result;
      console.log(response.result);
    });
  }
}
