import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected defaultController = `${environment.baseUrl}/api/`;
  protected slug = 'user';
  constructor(public http: HttpClient, private snackBar: MatSnackBar) {
  }

  public addUser(payload: any): Observable<any> {
    return this.http.post(`${this.defaultController}${this.slug}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public getUserPaymentGateways(userId: string): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}/pgs`);
  }

  public getUserLimits(userId: string): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}/limits`);
  }

  public getUserIps(userId: string, pageNumber: number): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}/ips?pageNumber=${pageNumber}`);
  }

  public getUserReferrals(userId: string, pageNumber: number): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}/referrals?pageNumber=${pageNumber}`);
  }

  public updateUserIp(userId: string, ipAddressId: string): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${userId}/ips/${ipAddressId}`, null).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public updateUserRef(userId: string, payload: any): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${userId}/refCode`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public deleteUserRef(userId: string, payload: any): Observable<any> {
    return this.http.delete(`${this.defaultController}${this.slug}/${userId}/refCode`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }


  public getUserRsns(userId: string, pageNumber: number): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}/rsns?pageNumber=${pageNumber}`);
  }

  public getUserNames(userId: string, pageNumber: number): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}/names?pageNumber=${pageNumber}`);
  }


  public updateUserPaymentGateways(id: string, data: any): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${id}/pgs`, data).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public getUser(userId: string): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}`);
  }

  public getUserData(userId: string): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}/data`);
  }

  public getUserOrders(userId: string, pageNumber: number): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${userId}/order?pageNumber=${pageNumber}`);
  }

  public getAllUsers(pageNumber: number, filterCriteria?: string): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}${filterCriteria}`);
  }

  public updateUser(id: string): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${id}`, null).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public updateUserGroup(id: string, data): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${id}/group`, data).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public updateUserRewards(id: string, data): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${id}/rewards`, data).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public changePassword(data: any): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/password`, data).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public activateUser(activate = true, payload: any): Observable<any> {
    return this.http.post(`${this.defaultController}${this.slug}/email/activation/${activate ? 'activate' : 'resend'}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public generatePassword(payload: any): Observable<any> {
    return this.http.post(`${this.defaultController}${this.slug}/password/generate`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 7000,
        });
      }));
  }

  public forgotPassword(payload: any): Observable<any> {
    return this.http.post(`${this.defaultController}${this.slug}/password`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 7000,
        });
      }));
  }
}
