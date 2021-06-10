import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModperfilusPageRoutingModule } from './modperfilus-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModperfilusPage } from './modperfilus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModperfilusPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModperfilusPage]
})
export class ModperfilusPageModule {}
