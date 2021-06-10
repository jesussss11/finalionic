import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialusPageRoutingModule } from './historialus-routing.module';

import { HistorialusPage } from './historialus.page';
import { FiltroPipe } from '../pipes/filtro.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialusPageRoutingModule
  ],
  declarations: [HistorialusPage,FiltroPipe]
})
export class HistorialusPageModule {}
