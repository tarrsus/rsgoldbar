import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { StockComponent } from './stock/stock.component';
import { UsersComponent } from './users/users.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminReferralsComponent } from './admin-referrals/admin-referrals.component';
import { AdminReferralOrdersComponent } from './admin-referral-orders/admin-referral-orders.component';


const routes: Routes = [
  {
    path: '',
    component: AdminMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'orders'
      }, 
      {
        path: 'stock',
        component: StockComponent
      }, 
      {
        path: 'orders',
        component: AdminOrdersComponent
      }, 
      // {
      //   path: 'referrals',
      //   component: AdminReferralsComponent
      // },
      {
        path: 'referrals/:id',
        component: AdminReferralOrdersComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:id',
        component: AdminUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
