import { NgModule } from '@angular/core';

import { EntityTypeComponent } from './entity-type.component';
import { AddEntityComponent  } from './entity-type.component'
import { EntityTypeRoutingModule } from './entity-type.routing.module';

import { MaterialModule } from './../../material.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
//MatConfirmDialogComponent 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  imports: [
    EntityTypeRoutingModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule
  ],
  declarations: [ EntityTypeComponent , AddEntityComponent],
  entryComponents: [AddEntityComponent]
})
export class EntityTypeModule { }

