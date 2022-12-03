import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../core/main/main.component';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { RootAdminAuthGuard } from '../shared/auth/root-admin-auth.guard';
import { PaymentGatewayResolver } from '../shared/resolvers/PaymentGatewayResolver.resolver';
import { StockResolver } from '../shared/resolvers/StockResolver.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      paymentGateways: PaymentGatewayResolver,
      stock: StockResolver
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'buy',
        loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule)
      },
      {
        path: 'infernal',
        loadChildren: () =>
          import('./infernal/infernal.module').then(m => m.InfernalModule)
      },
      {
        path: 'sell',
        loadChildren: () => import('./sell/sell.module').then(m => m.SellModule)
      },
      {
        path: 'swap',
        loadChildren: () => import('./swap/swap.module').then(m => m.SwapModule)
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./order-single/order-single.module').then(
            m => m.OrderSingleModule
          )
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'terms-of-services',
        loadChildren: () => import('./tos/tos.module').then(m => m.TosModule)
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./privacy/privacy.module').then(m => m.PrivacyModule)
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../core/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () =>
          import('../core/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('../core/forgot-password/forgot-password.module').then(
            m => m.ForgotPasswordModule
          )
      }
    ]
  },
  {
    path: 'admin',
    canLoad: [RootAdminAuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
