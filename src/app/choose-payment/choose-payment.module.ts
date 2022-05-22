import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosePaymentPageRoutingModule } from './choose-payment-routing.module';

import { ChoosePaymentPage } from './choose-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosePaymentPageRoutingModule
  ],
  declarations: [ChoosePaymentPage]
})
export class ChoosePaymentPageModule {}
