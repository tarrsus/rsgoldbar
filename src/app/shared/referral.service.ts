import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {
  protected defaultController = `${environment.baseUrl}/api/`;
  protected slug = 'referral';
  constructor(public http: HttpClient, private snackBar: MatSnackBar) {
  }

  public addReferral(payload: any): Observable<any> {
    return this.http.post(`${this.defaultController}${this.slug}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public getReferrals(pageNumber: number, filterCriteria: string = ''): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}${filterCriteria}`);
  }

  public getOrders(id: string, pageNumber: number, filterCriteria: string = ''): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${id}?pageNumber=${pageNumber}${filterCriteria}`);
  }

  public getStatistics(id: string,): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${id}/statistics`);
  }

  public updateReferral(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${id}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }
  public deleteReferral(id: string): Observable<any> {
    return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }
}
