import { OnInit, OnDestroy, Directive } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export class BasePageComponent implements OnInit, OnDestroy {
    componentDestroyed$: Subject<boolean> = new Subject();

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next(true);
        this.componentDestroyed$.complete();
    }
}