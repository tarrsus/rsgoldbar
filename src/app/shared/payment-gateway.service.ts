import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentGatewayService {
  protected defaultController = `${environment.baseUrl}/api/`;
  protected slug = 'paymentgateway';
  constructor(public http: HttpClient, private snackBar: MatSnackBar) {
  }

  public getPaymentGateways(): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}`);
  }

  public updatePaymentGateways(payload: any): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }
}
