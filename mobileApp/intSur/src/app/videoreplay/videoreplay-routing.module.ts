import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoreplayPage } from './videoreplay.page';

const routes: Routes = [
  {
    path: '',
    component: VideoreplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoreplayPageRoutingModule {}
