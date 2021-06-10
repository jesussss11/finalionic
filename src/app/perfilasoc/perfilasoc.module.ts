import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilasocPageRoutingModule } from './perfilasoc-routing.module';

import { PerfilasocPage } from './perfilasoc.page';
import { FiltrousPipe } from '../pipes/filtrous.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilasocPageRoutingModule
  ],
  declarations: [PerfilasocPage,FiltrousPipe]
})
export class PerfilasocPageModule {}
