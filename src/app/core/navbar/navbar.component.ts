import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
import { RequestsService } from 'src/app/shared/requests.service';
import { getCurrencyConverted, getCurrencySymbol, getCurrentCurrency, getPaymentGatewayName, isAdmin, isEmptyOrNull, isLoggedIn, isWorker, setCurrencies, setCurrentCurrency, setPaymentGateways } from 'src/app/shared/utils';
import { WatcherService } from 'src/app/shared/watcher.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  getPaymentGatewayName = getPaymentGatewayName;
  getCurrencySymbol = getCurrencySymbol;
  getCurrencyConverted = getCurrencyConverted;
  currencies = [];
  isLoggedIn = false;
  isAdmin = isAdmin();
  isWorker = isWorker();
  currency = getCurrentCurrency() || 'USD';
  @ViewChild('clickMenuTrigger') mobileMatMenuBtn: MatMenuTrigger;

  constructor(public watcher: WatcherService, private router: Router, private route: ActivatedRoute, private req: RequestsService, public cartService: CartService) {
    const allPgs = [
      ...this.route.snapshot.data.paymentGateways,
    ]

    setPaymentGateways(allPgs);
  }

  ngOnInit() {
    this.router.events.subscribe(result => {
      if (result instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    if (!isEmptyOrNull(this.route.snapshot) && !isEmptyOrNull(this.route.snapshot.queryParams) && !isEmptyOrNull(this.route.snapshot.queryParams.ref)) {
      localStorage.setItem('ref', this.route.snapshot.queryParams.ref);
    }

    this.isLoggedIn = isLoggedIn();
    this.watcher.get().subscribe(result => {
      if (result.jwt !== undefined) {
        this.isLoggedIn = isLoggedIn();
        this.isAdmin = isAdmin();
        this.isWorker = isWorker();
      }
    });

    const currenciesUrl = `${environment.baseUrl}/api/currencies`;
    this.req.get(currenciesUrl).subscribe(result => {
      setCurrencies(result);
      for (let currency in result) {
        this.currencies.push({
          name: currency,
          rate: result[currency]
        });
      }
      if (getCurrentCurrency()) {
        this.watcher.subjectCurrency.next(getCurrentCurrency());
      } else {
        setCurrentCurrency('USD');
        this.watcher.subjectCurrency.next('USD');
      }

      this.currency = getCurrentCurrency();
    });

    this.watcher.getCurrency().subscribe(r => {
      this.currency = r;
    });


  }

  public redirect(url: string, externalLink = false) {
    if (externalLink) {
      window.location.href = url;
    } else {
      this.router.navigate([url]);
    }
  }
}