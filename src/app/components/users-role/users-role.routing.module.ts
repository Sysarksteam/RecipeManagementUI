import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersRoleComponent } from './users-role.component';

const routes: Routes = [
  {
    path: '',
    component: UsersRoleComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoleRoutingModule {}
