import { Injectable, Injector } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, forkJoin } from 'rxjs';
import { GenericService } from '../generic-service';
import { AccountsService } from '../accounts.service';

@Injectable({ providedIn: 'root' })

export class AccountsResolver implements Resolve<any> {
    account: AccountsService;
    genericService: GenericService;
    constructor(private injector: Injector) {
        this.account = this.injector.get(AccountsService);
        this.genericService = this.injector.get(GenericService);
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return forkJoin([
            this.account.getAccounts(),
            this.genericService.getEndpoint('paymentgateways')
        ]);
    }
}
