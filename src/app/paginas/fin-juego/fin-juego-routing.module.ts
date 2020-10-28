import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinJuegoPage } from './fin-juego.page';

const routes: Routes = [
  {
    path: '',
    component: FinJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinJuegoPageRoutingModule {}
