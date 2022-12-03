import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../base-page.component';
import { MyErrorStateMatcher, isEmptyOrNull } from 'src/app/shared/utils';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BasePageService } from 'src/app/shared/base-page.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent extends BasePageComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  forgetForm = new FormGroup({
    email: new FormControl('', Validators.required)
  });

  constructor(private basePageService: BasePageService, private user: UserService, private router: Router, private route: ActivatedRoute) {
    super();
    this.basePageService.updateTitleDescription('Forgot Password', 'Can\t access your account? Reset your password');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(result => {
      if (!isEmptyOrNull(result.identifier) && !isEmptyOrNull(result.userId)) {
        this.user.generatePassword({
          identifier: result.identifier,
          userId: result.userId
        }).pipe(takeUntil(this.componentDestroyed$)).subscribe(response => {
          this.router.navigate([`/login`]);
        });
      }
    });
  }

  public forget(data: any) {
    this.user.forgotPassword(data).pipe(takeUntil(this.componentDestroyed$)).subscribe(result => {
      this.router.navigate([`/login`]);
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}


