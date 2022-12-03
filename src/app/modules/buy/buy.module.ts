import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy/buy.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BuyComponent],
  imports: [
    CommonModule,
    BuyRoutingModule,
    SharedModule
  ]
})
export class BuyModule { }
