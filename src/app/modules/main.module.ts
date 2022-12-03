import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from '../core/main/main.component';
import { FooterComponent } from '../core/footer/footer.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { NavbarComponent } from '../core/navbar/navbar.component';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule]
})
export class MainModule {}
