import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSingleComponent } from './order-single/order-single.component';


const routes: Routes = [
  {
    path: '',
    component: OrderSingleComponent,
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: ':orderId',
    component: OrderSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderSingleRoutingModule { }
