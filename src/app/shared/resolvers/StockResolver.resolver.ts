import { Injectable, Injector } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, forkJoin } from 'rxjs';
import { StockService } from '../stock.service';

@Injectable({ providedIn: 'root' })

export class StockResolver implements Resolve<any> {
    stock: StockService;
    constructor(private injector: Injector) {
        this.stock = this.injector.get(StockService);
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.stock.getStock();
    }
}
