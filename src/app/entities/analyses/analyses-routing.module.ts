import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalysesPage } from './analyses.page';

const routes: Routes = [
  {
    path: '',
    component: AnalysesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalysesPageRoutingModule {}
