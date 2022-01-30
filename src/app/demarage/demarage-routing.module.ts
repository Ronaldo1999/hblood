import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemaragePage } from './demarage.page';

const routes: Routes = [
  {
    path: '',
    component: DemaragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemaragePageRoutingModule {}
