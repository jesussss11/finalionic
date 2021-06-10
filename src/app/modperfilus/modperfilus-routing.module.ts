import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModperfilusPage } from './modperfilus.page';

const routes: Routes = [
  {
    path: '',
    component: ModperfilusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModperfilusPageRoutingModule {}
