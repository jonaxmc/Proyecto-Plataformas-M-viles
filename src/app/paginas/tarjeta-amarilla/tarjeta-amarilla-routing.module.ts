import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaAmarillaPage } from './tarjeta-amarilla.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaAmarillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaAmarillaPageRoutingModule {}
