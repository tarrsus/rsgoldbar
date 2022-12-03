import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { setCurrentCurrency } from './utils';

@Injectable({
  providedIn: 'root'
})
export class WatcherService {
  subject: Subject<any> = new Subject<any>();
  subjectCurrency: Subject<any> = new Subject<any>();
  subjectPaymentGateway: Subject<any> = new Subject<any>();
  subjectPaymentGateways: Subject<any[]> = new Subject<any[]>();
  initPaymentGateways = false;

  subjectGold: Subject<any> = new Subject<any>();
  constructor(private router: Router) {
    this.setVars();
  }

  public change(data) {
    this.subject.next(data);
  }

  public get() {
    return this.subject.asObservable();
  }

  public logout() {
    localStorage.removeItem('jwt');
    this.change({ jwt: null });
    this.router.navigate([`/login`]);
  }

  public getItem(name: string) {
    try {
      return JSON.parse(localStorage.getItem(name))
    } catch (err) {
      return [];
    }
  }

  public setVars() {
    if (!this.getItem('services')) {
      localStorage.setItem('services', '[]');
    } else {
      localStorage.setItem('services', JSON.stringify(this.getItem('services')));
    }
    if (!this.getItem('powerleveling')) {
      localStorage.setItem('powerleveling', '[]');
    } else {
      localStorage.setItem('powerleveling', JSON.stringify(this.getItem('powerleveling')));
    }
    if (!this.getItem('accounts')) {
      localStorage.setItem('accounts', '[]');
    } else {
      localStorage.setItem('accounts', JSON.stringify(this.getItem('accounts')));
    }
  }

  public updatePaymentGateways(paymentGateways: any[]) {
    this.subjectPaymentGateways.next(paymentGateways);
  }

  public getPaymentGateways() {
    return this.subjectPaymentGateways.asObservable();
  }

  public updatePaymentGateway(payload: any) {
    this.subjectPaymentGateway.next(payload);
  }

  public getPaymentGateway() {
    return this.subjectPaymentGateway.asObservable();
  }

  public setCurrency(name: string) {
    setCurrentCurrency(name);
    this.subjectCurrency.next(name);
  }

  public getCurrency() {
    return this.subjectCurrency.asObservable();
  }
}
