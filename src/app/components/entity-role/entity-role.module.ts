import { NgModule } from '@angular/core';

import { EntityRoleComponent } from './entity-role.component';
import { EntityRoleRoutingModule } from './entity-role.routing.module';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    EntityRoleRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
//    EntityRoleComponent
  ],
  declarations: [ EntityRoleComponent ]
})
export class EntityRoleModule { }


// new Chart(document.getElementById("chartjs-0"),
// {"type":"line","data":{"labels":["January","February","March","April","May","June","July"],
// "datasets":[{"label":"My First Dataset",
// "data":[65,59,80,81,56,55,40],
// "fill":false,
// "borderColor":"rgb(75, 192, 192)",
// "lineTension":0.1}]},
// "options":{}});

