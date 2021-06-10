import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroasocPage } from './registroasoc.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroasocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroasocPageRoutingModule {}
