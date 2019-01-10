import { Component, OnInit } from '@angular/core';
//import {Component, Inject, EventEmitter, OnInit, OnDestroy,TemplateRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/table';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { Component,  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entity-type',
  templateUrl: './entity-type.component.html',
  styleUrls: ['./entity-type.component.scss']
})
export class EntityTypeComponent implements OnInit {

  displayedColumns=['PropertyId','Property Type','Length','Data Type'];
  optionsheader = ['ID','Text'];

  constructor(private httpService: HttpClient) { }
  entitydbjson: string [];
  typedbjson: string [];
  optionsdbjson: string[];

  ngOnInit() {
    this.httpService.get('./assets/entity.json').subscribe(
      data => {
        this.entitydbjson = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.entitydbjson);
      },
      // (err: HttpErrorResponse) => {
      //   console.log (err.message);
      // }
    );

    this.httpService.get('./assets/typedb.json').subscribe(
      data => {
        this.typedbjson = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.typedbjson);
      },
      // (err: HttpErrorResponse) => {
      //   console.log (err.message);
      // }
    );

    this.httpService.get('./assets/optiondb.json').subscribe(
      data => {
        this.optionsdbjson = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.optionsdbjson);
      },
      // (err: HttpErrorResponse) => {
      //   console.log (err.message);
      // }
    );
  }

}
