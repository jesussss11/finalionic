import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';

import { UsuarioPage } from './usuario.page';
import { PipusPipe } from '../pipes/pipus.pipe';
import { PipasPipe } from '../pipes/pipas.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    ReactiveFormsModule,
   
  ],
  declarations: [UsuarioPage, PipusPipe,
    PipasPipe]
})
export class UsuarioPageModule {}
