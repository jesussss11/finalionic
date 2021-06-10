import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModperfilasocPage } from './modperfilasoc.page';

const routes: Routes = [
  {
    path: '',
    component: ModperfilasocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModperfilasocPageRoutingModule {}
