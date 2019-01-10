import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityTypeComponent } from './entity-type.component';

const routes: Routes = [
  {
    path: '',
    component: EntityTypeComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityTypeRoutingModule {}
