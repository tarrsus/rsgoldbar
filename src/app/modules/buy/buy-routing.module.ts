import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockResolver } from 'src/app/shared/resolvers/StockResolver.resolver';
import { BuyComponent } from './buy/buy.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'oldschool'
  },
  {
    path: 'oldschool',
    component: BuyComponent,
    resolve: {
      stock: StockResolver
    }
  },
  {
    path: 'runescape3',
    component: BuyComponent,
    resolve: {
      stock: StockResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }
