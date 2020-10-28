import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TargetaVerdePageRoutingModule } from './targeta-verde-routing.module';

import { TargetaVerdePage } from './targeta-verde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TargetaVerdePageRoutingModule
  ],
  declarations: [TargetaVerdePage]
})
export class TargetaVerdePageModule {}
