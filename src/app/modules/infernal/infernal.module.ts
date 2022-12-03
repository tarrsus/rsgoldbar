import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfernalRoutingModule } from './infernal-routing.module';
import { InfernalComponent } from './infernal/infernal.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InfernalComponent],
  imports: [CommonModule, InfernalRoutingModule, SharedModule]
})
export class InfernalModule {}
