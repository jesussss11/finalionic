import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsociacionPageRoutingModule } from './asociacion-routing.module';

import { AsociacionPage } from './asociacion.page';
import { FilterasocPipe } from '../pipes/filterasoc.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsociacionPageRoutingModule
  ],
  declarations: [AsociacionPage, FilterasocPipe]
})
export class AsociacionPageModule {}
