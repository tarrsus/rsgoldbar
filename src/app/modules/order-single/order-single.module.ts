import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSingleRoutingModule } from './order-single-routing.module';
import { OrderSingleComponent } from './order-single/order-single.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [OrderSingleComponent],
  imports: [
    CommonModule,
    OrderSingleRoutingModule,
    SharedModule
  ]
})
export class OrderSingleModule { }
