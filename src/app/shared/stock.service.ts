import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/internal/operators/tap';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  protected defaultController = `${environment.baseUrl}/api/`;
  protected slug = 'stock';
  constructor(public http: HttpClient, private snackBar: MatSnackBar) {
  }

  public getStock(): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}`);
  }

  public updateStock(payload: any): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }
}
