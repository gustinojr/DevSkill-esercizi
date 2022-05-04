import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputConvertitoreComponent } from './input-convertitore.component';




@NgModule({
  declarations: [InputConvertitoreComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[InputConvertitoreModule]
})
export class InputConvertitoreModule { }
