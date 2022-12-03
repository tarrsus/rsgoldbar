import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwapRoutingModule } from './swap-routing.module';
import { SwapComponent } from './swap/swap.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SwapComponent],
  imports: [
    CommonModule,
    SwapRoutingModule,
    SharedModule
  ]
})
export class SwapModule { }
