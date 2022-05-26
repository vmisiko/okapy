import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseOptionComponent } from './components/choose-option/choose-option.component';
import { formatCardno } from './pipes/formatCardno';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TopHeaderComponent } from './components/top-header/top-header.component';


@NgModule({
  declarations: [
    ChooseOptionComponent,
    TopHeaderComponent,
    formatCardno
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(), 
  ],
  exports: [
    ChooseOptionComponent,
    TopHeaderComponent,
    formatCardno,
  ],

})
export class SharedModule { }
