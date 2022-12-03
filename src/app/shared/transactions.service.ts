import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  protected defaultController = `${environment.baseUrl}/api/`;
  protected slug = 'g2apay-ipn';
  constructor(public http: HttpClient) {
  }

  public getAllTransactions(): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}`);
  }
}
