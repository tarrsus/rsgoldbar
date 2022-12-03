import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { isLoggedIn, isAdmin, isWorker } from '../utils';
import { Observable } from 'rxjs';
import { WatcherService } from '../watcher.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class RootAdminAuthGuard implements CanLoad {
    constructor(private router: Router, private watcher: WatcherService, private snackBar: MatSnackBar) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        if (isLoggedIn() && (isAdmin() || isWorker())) {
            return true;
        }
        this.snackBar.open('You do not have access, please log in', 'Dismiss', {
            duration: 5000,
        });
        this.watcher.logout();
        return false;
    }
}
