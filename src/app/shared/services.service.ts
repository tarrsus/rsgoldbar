import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  protected defaultController = `${environment.baseUrl}/api/`;
  protected slug = 'service';
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  public getService(id: string): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${id}`);
  }

  public getServices(pageNumber?: number, title: string = ''): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}&title=${title}`);
  }

  public getAllServices(): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/all`);
  }

  public getAllSkillsTable(): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/powerleveling/table`);
  }

  public deleteService(id: string): Observable<any> {
    return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public addService(payload: any, postfix?: string): Observable<any> {
    return this.http.post(`${this.defaultController}${this.slug}${postfix ? '/' + postfix : ''}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public editService(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${id}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }
}
