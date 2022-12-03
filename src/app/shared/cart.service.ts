import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { deepClone, getLocalStorageArray, isEmptyOrNull, round } from './utils';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  subject: Subject<any> = new Subject<any>();
  constructor() {
  }

  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    this.subject.next();
  }

  public addItem(key: string, value: any) {
    let array = JSON.parse(localStorage.getItem(key));
    array.push(value);
    localStorage.setItem(key, JSON.stringify(array));
    this.subject.next();
  }

  public removeItem(key: string, keyId: string, idValue: any) {
    let array = JSON.parse(localStorage.getItem(key));
    array = array.filter(x => x[keyId] !== idValue);
    localStorage.setItem(key, JSON.stringify(array));
    this.subject.next();
  }

  public updateItem(key: string, keyId: string, idValue: any, newValue: any) {
    let array = JSON.parse(localStorage.getItem(key));
    if (this.isAdded(key, keyId, idValue)) {
      const index = this.getItemIndex(key, keyId, idValue);
      if (index !== -1) {
        array[index] = newValue;
        this.setItem(key, array);
        this.subject.next();
      }
    }
  }

  public isAdded(key: string, keyId: string, idValue: any) {
    let array = JSON.parse(localStorage.getItem(key));
    const found = array.find(x => x[keyId] === idValue);
    return found !== undefined && found !== null;
  }

  public getItemIndex(key: string, keyId: string, idValue: any) {
    let array = JSON.parse(localStorage.getItem(key));
    return array.map(x => x[keyId]).indexOf(idValue);
  }

  public getItem(key: string, keyId: string, idValue: any) {
    let array = JSON.parse(localStorage.getItem(key));
    return array.find(x => x[keyId] === idValue);
  }

  public get cartTotal() {
    const accounts = getLocalStorageArray('accounts');
    const powerleveling = getLocalStorageArray('powerleveling');
    const services = getLocalStorageArray('services');
    let usd = 0;
    let items = 0;
    let totalAccountUsd = 0;
    let totalPowerlevelingUsd = 0;
    let totalServicesUsd = 0;
    accounts.forEach(account => {
      totalAccountUsd += account.price;
      items++;
    });

    powerleveling.forEach(p => {
      totalPowerlevelingUsd += p.price;
      items++
    });

    services.forEach(q => {
      totalServicesUsd += q.price;
      items++
    });

    usd = round(totalAccountUsd + totalPowerlevelingUsd + totalServicesUsd);

    return {
      usd,
      items
    }
  }
}
