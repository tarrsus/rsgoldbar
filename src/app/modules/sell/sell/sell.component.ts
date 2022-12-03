import { Component, OnInit } from '@angular/core';
import { round } from 'mathjs';
import {
  getCurrencyConverted,
  getCurrencySymbol,
  getCurrentCurrency,
  isEmptyOrNull,
  sendLiveChatMessage
} from 'src/app/shared/utils';
import { WatcherService } from 'src/app/shared/watcher.service';
import { StockService } from '../../../shared/stock.service';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.sass']
})
export class SellComponent implements OnInit {
  type = 'osrs';
  rsn = '';
  amount = 0;
  osrsBuying = 0;
  rs3Buying = 0;
  getCurrencyConverted = getCurrencyConverted;
  getCurrencySymbol = getCurrencySymbol;
  currency = getCurrentCurrency() || 'USD';
  constructor(
    private stockService: StockService,
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
  }

  rsn1 = '';
  rsn2 = '';
  amount1 = 0;
  amount2 = 0;

  public openLiveChat(flag: boolean, type: string, amount: number) {
    if (flag) {
      return;
    }
    const w: any = window;
    sendLiveChatMessage(
      `Hello, I would like to sell ${round(amount)}M ${type}`
    );
  }

  public disabled1() {
    return !this.amount1 || this.amount1 <= 0;
  }
  public disabled2() {
    return !this.amount2 || this.amount2 <= 0;
  }
}
