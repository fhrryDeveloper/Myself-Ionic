import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPagePage } from './test-page.page';

const routes: Routes = [
  {
    path: '',
    component: TestPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPagePageRoutingModule {}
