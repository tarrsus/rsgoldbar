import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfernalComponent } from './infernal/infernal.component';

const routes: Routes = [
  {
    path: '',
    component: InfernalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfernalRoutingModule {}
