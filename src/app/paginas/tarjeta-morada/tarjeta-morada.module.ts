import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaMoradaPageRoutingModule } from './tarjeta-morada-routing.module';

import { TarjetaMoradaPage } from './tarjeta-morada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaMoradaPageRoutingModule
  ],
  declarations: [TarjetaMoradaPage]
})
export class TarjetaMoradaPageModule {}
