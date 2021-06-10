import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilasocPage } from './perfilasoc.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilasocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilasocPageRoutingModule {}
