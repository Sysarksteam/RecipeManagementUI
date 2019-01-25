import { NgModule } from '@angular/core';

import { UsersRoleComponent } from './users-role.component';
//import { UserRoleCreateComponent, MatConfirmDialogComponent } from './users-role.component'
import { UsersRoleRoutingModule } from './users-role.routing.module';
import { MaterialModule } from './../../material.module';

import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    UsersRoleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [ UsersRoleComponent]
})
export class UsersRoleModule { }


