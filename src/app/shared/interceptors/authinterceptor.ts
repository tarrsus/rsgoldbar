import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse, HttpEvent } from '@angular/common/http';
import { getJwtToken } from '../utils';
import { tap, catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { WatcherService } from '../watcher.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProgressiveLoaderService } from '../progressive-loader.service';
import { MatDialog } from '@angular/material/dialog';
import { BannedComponent } from '../modals/banned/banned.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private watcher: WatcherService, private snackBar: MatSnackBar, private loader: ProgressiveLoaderService, private dialog: MatDialog) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.loader.updateLoader(true);
        const authToken = `Bearer ${getJwtToken()}`;
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });

        return next.handle(authReq).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    switch (event.status) {
                        case 200: // Ok
                            break;
                        case 201: // Created
                            break;
                        case 202: // Accepted
                            break;
                        default:
                            break;
                    }
                }
            }), catchError(response => {
                if (response.status !== 403) {
                    this.snackBar.open(response.error, 'Dismiss', {
                        duration: 5000,
                    });
                }
                if (response instanceof HttpErrorResponse) {
                    switch (response.status) {
                        case 400:
                            // this.notification.showError(errorMessage, false, 5);
                            /**
                             * Bad Request
                             */
                            break;
                        case 401:
                            /**
                             * Unauthorized
                             */
                            // this.watcher.logout();
                            break;
                        case 403:
                            // this.notification.showError(errorMessage, false, 5);
                            this.dialog.open(BannedComponent, {
                                data: {
                                    message: response.error
                                },
                                width: '500px'
                            })
                            break;
                        case 500:
                            /**
                             * Internal Server Error
                             */
                            break;
                        default:
                            if (response.error && response.error.validation && response.error.validation[0]) {
                                // this.notification.onError('Error', response.error.validation[0].errorMessage);
                            } else {
                                // this.notification.onError('Error', response.error.description);
                            }
                            break;
                    }
                }
                return of(response.message);
            }),
            finalize(() => {
                this.loader.updateLoader(false);
            }));
    }
}
