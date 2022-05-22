import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosePaymentPage } from './choose-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosePaymentPageRoutingModule {}
