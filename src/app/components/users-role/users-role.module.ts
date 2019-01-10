import { NgModule } from '@angular/core';

import { UsersRoleComponent } from './users-role.component';
import { UsersRoleRoutingModule } from './users-role.routing.module';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    UsersRoleRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [ UsersRoleComponent ]
})
export class UsersRoleModule { }


// new Chart(document.getElementById("chartjs-0"),
// {"type":"line","data":{"labels":["January","February","March","April","May","June","July"],
// "datasets":[{"label":"My First Dataset",
// "data":[65,59,80,81,56,55,40],
// "fill":false,
// "borderColor":"rgb(75, 192, 192)",
// "lineTension":0.1}]},
// "options":{}});

