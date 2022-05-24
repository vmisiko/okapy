import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseOptionComponent } from './components/choose-option/choose-option.component';
import { formatCardno } from './pipes/formatCardno';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


@NgModule({
  declarations: [
    ChooseOptionComponent,
    formatCardno
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
  ],
  exports: [
    ChooseOptionComponent,
    formatCardno,
  ],

})
export class SharedModule { }
