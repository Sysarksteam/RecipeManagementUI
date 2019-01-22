import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityRoleComponent } from './entity-role.component';

const routes: Routes = [
  {
    path: '',
    component: EntityRoleComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityRoleRoutingModule {}
