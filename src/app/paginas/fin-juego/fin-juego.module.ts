import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinJuegoPageRoutingModule } from './fin-juego-routing.module';

import { FinJuegoPage } from './fin-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinJuegoPageRoutingModule
  ],
  declarations: [FinJuegoPage]
})
export class FinJuegoPageModule {}
