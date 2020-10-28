import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TargetaAzulPageRoutingModule } from './targeta-azul-routing.module';

import { TargetaAzulPage } from './targeta-azul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TargetaAzulPageRoutingModule
  ],
  declarations: [TargetaAzulPage]
})
export class TargetaAzulPageModule {}
