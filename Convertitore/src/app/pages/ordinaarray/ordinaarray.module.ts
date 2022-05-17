import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdinaarrayPageRoutingModule } from './ordinaarray-routing.module';

import { OrdinaarrayPage } from './ordinaarray.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdinaarrayPageRoutingModule
  ],
  declarations: [OrdinaarrayPage]
})
export class OrdinaarrayPageModule {}
