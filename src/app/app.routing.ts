import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,

    children: [

      {
        path: 'users',
        loadChildren: './components/users/users.module#UsersModule'
      },

      {
        path: 'users-role',
        loadChildren: './components/users-role/users-role.module#UsersRoleModule'
      },

       {
        path: 'entity-type',
        loadChildren: './components/entity-type/entity-type.module#EntityTypeModule'
      },
      {
        path: 'entity-role',
        loadChildren: './components/entity-role/entity-role.module#EntityRoleModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
