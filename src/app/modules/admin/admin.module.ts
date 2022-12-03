import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { StockComponent } from './stock/stock.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminReferralsComponent } from './admin-referrals/admin-referrals.component';
import { AdminReferralOrdersComponent } from './admin-referral-orders/admin-referral-orders.component';

@NgModule({
  declarations: [AdminMainComponent, StockComponent, UsersComponent, AdminOrdersComponent, AdminUserComponent, AdminReferralsComponent, AdminReferralOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
