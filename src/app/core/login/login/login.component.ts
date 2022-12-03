import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestsService } from 'src/app/shared/requests.service';
import { WatcherService } from 'src/app/shared/watcher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isEmptyOrNull, MyErrorStateMatcher } from 'src/app/shared/utils';
import { environment } from 'src/environments/environment';
import { BasePageComponent } from '../../base-page.component';
import { UserService } from 'src/app/shared/user.service';
import { takeUntil } from 'rxjs/operators';
import { BasePageService } from 'src/app/shared/base-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent extends BasePageComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  // tslint:disable-next-line:max-line-length
  constructor(private basePageService: BasePageService, private req: RequestsService, private route: ActivatedRoute, private router: Router, private watcher: WatcherService, private user: UserService) {
    super();
  }

  ngOnInit() {
    // this.basePageService.updateTitleDescription('Login', 'Login to your account');

    this.route.queryParams.subscribe(result => {
      if (!isEmptyOrNull(result.identifier) && !isEmptyOrNull(result.userId)) {
        this.user.activateUser(true, {
          identifier: result.identifier,
          userId: result.userId
        }).pipe(takeUntil(this.componentDestroyed$)).subscribe(response => {
          this.watcher.logout();
        });
      }
    });
  }

  public login(data: any) {
    const loginUrl = `${environment.baseUrl}/api/oauth`;
    this.req.post(loginUrl, data).pipe(takeUntil(this.componentDestroyed$)).subscribe(result => {
      localStorage.setItem('jwt', result);
      this.watcher.change({ jwt: result });
      this.router.navigate([`/`]);
      // this.watcher.setVars();
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
