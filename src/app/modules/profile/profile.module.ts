import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserOrdersComponent } from './user-orders/user-orders.component';

@NgModule({
  declarations: [UserChangePasswordComponent, UserOrdersComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
