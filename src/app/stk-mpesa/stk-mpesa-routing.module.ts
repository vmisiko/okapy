import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StkMpesaPage } from './stk-mpesa.page';

const routes: Routes = [
  {
    path: '',
    component: StkMpesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StkMpesaPageRoutingModule {}
