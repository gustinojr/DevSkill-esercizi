import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdinaarrayPage } from './ordinaarray.page';

const routes: Routes = [
  {
    path: '',
    component: OrdinaarrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdinaarrayPageRoutingModule {}
