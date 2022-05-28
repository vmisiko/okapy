import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { StkMpesaPageRoutingModule } from './stk-mpesa-routing.module';

import { StkMpesaPage } from './stk-mpesa.page';
import { SharedModule } from '../shared/shared.module';
import { IonIntlTelInputModule } from 'ion-intl-tel-input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StkMpesaPageRoutingModule,
    SharedModule,
    IonIntlTelInputModule,
  ],
  declarations: [StkMpesaPage]
})
export class StkMpesaPageModule {}
