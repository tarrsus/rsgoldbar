import { Injectable, Injector } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, forkJoin } from 'rxjs';
import { PaymentGatewayService } from '../payment-gateway.service';
import { StockService } from '../stock.service';

@Injectable({ providedIn: 'root' })

export class PaymentGatewayResolver implements Resolve<any> {
    constructor(private paymentGatewayService: PaymentGatewayService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.paymentGatewayService.getPaymentGateways();
    }
}
