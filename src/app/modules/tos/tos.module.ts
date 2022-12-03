import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TosRoutingModule } from './tos-routing.module';
import { TosComponent } from './tos/tos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TosComponent],
  imports: [
    CommonModule,
    TosRoutingModule,
    SharedModule
  ]
})
export class TosModule { }
