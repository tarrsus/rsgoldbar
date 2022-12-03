import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { sendLiveChatMessage, round, isEmptyOrNull, getCurrencyConverted, getCurrencySymbol, getCurrentCurrency } from 'src/app/shared/utils';
import { WatcherService } from 'src/app/shared/watcher.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  osrsBuying = 0;
  rs3Buying = 0;
  getCurrencyConverted = getCurrencyConverted;
  getCurrencySymbol = getCurrencySymbol;
  currency = getCurrentCurrency() || 'USD';
  constructor(private title: Title, private meta: Meta, private router: Router, private route: ActivatedRoute, private watcher: WatcherService) { }

  ngOnInit() {
    if (!isEmptyOrNull(this.route.snapshot.data) && !isEmptyOrNull(this.route.snapshot.data.stock)) {
      this.osrsBuying = this.route.snapshot.data.stock.osrs.buying;
      this.rs3Buying = this.route.snapshot.data.stock.rs3.buying;
    }
    this.watcher.getCurrency().subscribe(r => {
      this.currency = r;
    });
  }

  public goTo(path: string) {
    this.router.navigate([`/buy/${path}`]);
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
    sendLiveChatMessage(`Hello, I would like to sell ${round(amount)}M ${type}`);
  }

  public disabled1() {
    return !this.amount1 || this.amount1 <= 0;
  }
  public disabled2() {
    return !this.amount2 || this.amount2 <= 0;
  }
}
