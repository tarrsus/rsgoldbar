import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  protected defaultController = `${environment.baseUrl}/api/`;
  protected slug = 'blog';
  constructor(public http: HttpClient, private snackBar: MatSnackBar) {
  }

  public addBlog(payload: any): Observable<any> {
    return this.http.post(`${this.defaultController}${this.slug}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public getBlogs(pageNumber: number = 1): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}?pageNumber=${pageNumber}`);
  }

  public getBlog(id: string): Observable<any> {
    return this.http.get(`${this.defaultController}${this.slug}/${id}`);
  }

  public updateBlog(id: string, payload: any): Observable<any> {
    return this.http.put(`${this.defaultController}${this.slug}/${id}`, payload).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }

  public deleteBlog(id: string): Observable<any> {
    return this.http.delete(`${this.defaultController}${this.slug}/${id}`).pipe(
      tap(response => {
        this.snackBar.open(response.result, 'Dismiss', {
          duration: 5000,
        });
      }));
  }
}
