import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaRojaPage } from './tarjeta-roja.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaRojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaRojaPageRoutingModule {}
