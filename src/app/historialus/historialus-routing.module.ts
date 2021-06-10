import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialusPage } from './historialus.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialusPageRoutingModule {}
