import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'choose-payment',
    pathMatch: 'full'
  },
  {
    path: 'choose-payment',
    loadChildren: () => import('./choose-payment/choose-payment.module').then( m => m.ChoosePaymentPageModule)
  },
  {
    path: 'add-payment',
    loadChildren: () => import('./add-payment/add-payment.module').then( m => m.AddPaymentPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./add-card/add-card.module').then( m => m.AddCardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
