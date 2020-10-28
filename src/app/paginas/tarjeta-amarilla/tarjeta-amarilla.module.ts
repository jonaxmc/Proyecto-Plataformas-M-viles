import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaAmarillaPageRoutingModule } from './tarjeta-amarilla-routing.module';

import { TarjetaAmarillaPage } from './tarjeta-amarilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaAmarillaPageRoutingModule
  ],
  declarations: [TarjetaAmarillaPage]
})
export class TarjetaAmarillaPageModule {}
