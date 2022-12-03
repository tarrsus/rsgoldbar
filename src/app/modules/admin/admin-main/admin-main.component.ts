import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { WatcherService } from 'src/app/shared/watcher.service';
import { isAdmin, isLoggedIn, isWorker } from 'src/app/shared/utils';
import { BasePageService } from 'src/app/shared/base-page.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.sass']
})
export class AdminMainComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:variable-name
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  isLoggedIn = false;
  isAdmin = isAdmin();
  isWorker = isWorker();
  isMobile = false;
  navLinks = [];

  constructor(public watcher: WatcherService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private basePageService: BasePageService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.basePageService.updateTitleDescription('Admin Control Panel', 'Admin Control Panel | Fast Delivery | Fairly Priced Rates | 100% Secured');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.isLoggedIn = isLoggedIn();
    this.watcher.get().subscribe(result => {
      if (result.isMobile !== undefined) {
        this.isMobile = result.isMobile;
      }

      if (result.jwt !== undefined) {
        this.isLoggedIn = isLoggedIn();
        this.isAdmin = isAdmin();
        this.isWorker = isWorker();
      }
    });

    this.navLinks = [
      {
        text: `Home`,
        link: '/'
      },
      {
        text: 'Orders',
        link: '/admin/orders'
      },
      {
        text: 'Stock',
        link: '/admin/stock'
      },
     
      {
        text: 'Users',
        link: '/admin/users'
      }, 
    ]

  }
}
