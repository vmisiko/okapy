import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosePaymentPageRoutingModule } from './choose-payment-routing.module';

import { ChoosePaymentPage } from './choose-payment.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosePaymentPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ChoosePaymentPage, 
  ]
})
export class ChoosePaymentPageModule {}
