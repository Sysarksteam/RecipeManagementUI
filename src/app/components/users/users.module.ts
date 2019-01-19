import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent  } from './users.component';
import { UserCreateComponent, MatConfirmDialogComponent, UserUpdateComponent } from './users.component'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { UserCreateComponent } from './users.component';
import { MaterialModule } from './../../material.module';
import { UsersRoutingModule } from './users-routing.module';
import { ModalModule } from 'ngx-bootstrap';

MatConfirmDialogComponent 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [

UsersRoutingModule,
MaterialModule,
FormsModule,
ReactiveFormsModule,
NgMultiSelectDropDownModule.forRoot(),
ModalModule.forRoot(),
CommonModule
  ],
  declarations: [ UsersComponent, UserCreateComponent,UserUpdateComponent,MatConfirmDialogComponent ],
  entryComponents: [UserCreateComponent, UserUpdateComponent,MatConfirmDialogComponent]
})
export class UsersModule { }
