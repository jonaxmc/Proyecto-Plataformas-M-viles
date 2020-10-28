import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaRojaPageRoutingModule } from './tarjeta-roja-routing.module';

import { TarjetaRojaPage } from './tarjeta-roja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaRojaPageRoutingModule
  ],
  declarations: [TarjetaRojaPage]
})
export class TarjetaRojaPageModule {}
