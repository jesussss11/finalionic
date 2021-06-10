import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { ModperfilasocPageRoutingModule } from './modperfilasoc-routing.module';

import { ModperfilasocPage } from './modperfilasoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModperfilasocPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ModperfilasocPage]
})
export class ModperfilasocPageModule {}
