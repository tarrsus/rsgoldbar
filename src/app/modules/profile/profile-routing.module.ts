import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'change-password'
  },
  {
    path: 'change-password',
    component: UserChangePasswordComponent
  },
  {
    path: 'orders',
    component: UserOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
