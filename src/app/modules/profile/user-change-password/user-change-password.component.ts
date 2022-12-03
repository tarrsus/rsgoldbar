import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/core/base-page.component';
import { MyErrorStateMatcher } from 'src/app/shared/utils';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WatcherService } from 'src/app/shared/watcher.service';
import { UserService } from 'src/app/shared/user.service';
import { BasePageService } from 'src/app/shared/base-page.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.sass']
})
export class UserChangePasswordComponent extends BasePageComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  changePasswordForm = new FormGroup({
    current_password: new FormControl('', Validators.required),
    new_password: new FormControl('', Validators.required),
    confirm_new_password: new FormControl('', Validators.required)
  }, this.checkPasswords);

  constructor(private basePageService: BasePageService, private watcher: WatcherService, private userService: UserService) {
    super();
    // this.basePageService.updateTitleDescription('Profile', `${environment.title} User Control Panel`);
  }

  ngOnInit() {
  }

  public change(data: any) {
    this.userService.changePassword(data).subscribe(r => {
      this.watcher.logout();
    })
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  private checkPasswords(group: FormGroup) {
    const pass = group.get('new_password').value;
    const confirmPass = group.get('confirm_new_password').value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
