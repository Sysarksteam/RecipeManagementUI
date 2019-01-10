import { NgModule } from '@angular/core';

import { EntityTypeComponent } from './entity-type.component';
import { EntityTypeRoutingModule } from './entity-type.routing.module';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    EntityTypeRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [ EntityTypeComponent ]
})
export class EntityTypeModule { }

