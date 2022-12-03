import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from 'src/app/shared/utils';
import { BasePageComponent } from '../../base-page.component';
import { UserService } from 'src/app/shared/user.service';
import { takeUntil } from 'rxjs/operators';
import { BasePageService } from 'src/app/shared/base-page.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent extends BasePageComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required)
  }, this.checkPasswords);
  constructor(private basePageService: BasePageService, private user: UserService, private router: Router) {
    super();
  }

  ngOnInit() {
    // this.basePageService.updateTitleDescription('Register', `New to ${environment.title}? Register an account now!`);
  }

  private checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirm_password').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  public register(data: any) {
    data.refCode = localStorage.getItem('ref');
    this.user.addUser(data).pipe(takeUntil(this.componentDestroyed$)).subscribe(response => {
      this.router.navigate([`/login`]);
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}