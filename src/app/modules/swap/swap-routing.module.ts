import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwapComponent } from './swap/swap.component';

const routes: Routes = [
  {
    path: '',
    component: SwapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwapRoutingModule { }
