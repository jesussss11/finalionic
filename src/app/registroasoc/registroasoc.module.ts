import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroasocPageRoutingModule } from './registroasoc-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistroasocPage } from './registroasoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroasocPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [RegistroasocPage]
})
export class RegistroasocPageModule {}
