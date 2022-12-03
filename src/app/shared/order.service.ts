import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  protected defaultController = `${environment.baseUrl}/api/`;
  protected slug = 'order';
  constructor(public http: HttpClient, private snackBar: MatSnackBar) {}

  public addOrder(payload: any): Observable<any> {
    return this.http.post(`${this.defaultController}${this.slug}`, payload);
  }

  public getOrders(
    pageNumber: number = 1,
    filterCriteria = ''
  ): Observable<any> {
    return this.http.get(
      `${this.defaultController}${this.slug}?pageNumber=${pageNumber}${filterCriteria}`
    );
  }

  public getSingleOrder(id): Observable<any> {
    return this.http.get(`${this.defaultController}order/${id}`);
  }

  public updateOrder(id): Observable<any> {
    return this.http
      .put(`${this.defaultController}${this.slug}/${id}`, null)
      .pipe(
        tap(response => {
          this.snackBar.open(response.result, 'Dismiss', {
            duration: 5000
          });
        })
      );
  }

  public deleteOrder(id): Observable<any> {
    return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000
        });
      })
    );
  }

  public getRates(): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/rates`);
  }

  public setRate(curr, newRate): Observable<any> {
    return this.http.put(
      `${this.defaultController}${this.slug}/rates/${curr}`,
      { rate: +newRate }
    );
  }
}
