import { Component, OnInit , Inject} from '@angular/core';
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
//import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }


@Component({
  selector: 'app-entity-type',
  templateUrl: './entity-type.component.html',
  styleUrls: ['./entity-type.component.scss']
})
export class EntityTypeComponent implements OnInit {

  displayedColumns=['PropertyId','Property Type','Length','Data Type'];
  optionsheader = ['ID','Text'];

  constructor(private httpService: HttpClient,public dialog: MatDialog) { }
  entitydbjson: string [];
  typedbjson: string [];
  optionsdbjson: string[];

openDialog(): void {
    const dialogRef = this.dialog.open(AddEntityComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      //this.fetchUser();
    });


   }
  
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

@Component({
  templateUrl: 'entity-dialogue.component.html',
  styleUrls: ['entity-dialogue.component.scss']
})

export class AddEntityComponent {

  createForm: FormGroup;
_data1=["role","role2","role3","role4"];
  entitydbjson: string [];
  typedbjson: string [];
  optionsdbjson: string[];
  displayedColumns = ['id', 'textvalue'];
  private formSubmitAttempt: boolean;
  constructor(
    public dialogRef: MatDialogRef<EntityTypeComponent>,
    private httpService: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private addUser: AddUserService,
    private fb: FormBuilder,
    private router: Router
  ) {
  //   this.createForm = this.fb.group({
  //   UserName: ['', Validators.required],
  //   FirstName: ['', Validators.required],
  //   LastName: ['', Validators.required],
  //   UserEmail: ['', Validators.required],
  //   UserPhone: ['',Validators.required],
  //   UserPwd: ['', Validators.required],
  //   roles: ['', Validators.required]
  //  // roleid: ['', Validators.required]
  //   })
   }


  // isFieldInvalid(field: string) {
  //   return (
  //     (!this.createForm.get(field).valid && this.createForm.get(field).touched) ||
  //     (this.createForm.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }
  
   options: any[] = [
    {value: 'text'},
    {value: 'dropdown'},
    {value: 'radio'},
    {value: 'range'},
    {value: 'checkbox'},
    {value: 'multiselector'},
     {value: 'description'}
  ];
// options = ["text","dropdown","radio","range","checkbox","multiselector"];
  onNoClick(): void {
    this.dialogRef.close();
  }
  
 
  
 // export interface OPTIONS {
//   value: string;
// }
//   createUser(createForm){

// console.log(createForm);
//     // this.addUser.createUser(createForm).subscribe((res) => {
//     //   console.log(res);
//     //   this.dialogRef.close();
//     //   this.router.navigate['/users']
//     //   });
//   }
  dataSource: any;
  ngOnInit(){
  //this.getUserRoles();
  this.httpService.get('./assets/typedb.json').subscribe(
      data => {
        this.typedbjson = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.typedbjson);
        // this.dataSource = this.typedbjson
      },
      // (err: HttpErrorResponse) => {
      //   console.log (err.message);
      // }
    );

    this.httpService.get('./assets/optiondb.json').subscribe(
      data => {
        this.optionsdbjson = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.optionsdbjson);
          this.dataSource = this.optionsdbjson;
          console.log(this.dataSource);
      },
      // (err: HttpErrorResponse) => {
      //   console.log (err.message);
      // }
    );
    
  }

  selectedNav: any;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;
  show8 = false;
  regTypeSelectedOption: any;
  yesnoCheck(nav:any){
        this.selectedNav = nav;
        console.log(nav);
            if(this.selectedNav.value === "text"){
              console.log("hello");
              this.show1 = true;
              this.show8 = true;
            }
            else{
              this.show2 = false;
              this.show3 = false;
              this.show4 = false;
              this.show5 = false;
              this.show6 = false;
              this.show7 = false;
            }
             if(this.selectedNav.value === "dropdown"){
              console.log("hello");
              this.show3 = true;
              this.show4 = true;
              this.show5 = true;
            }
            else{
              this.show1 = false;
              this.show2 = false;
              this.show8 = false;
              this.show6 = false;
              this.show7 = false;
            }
            if(this.selectedNav.value === "radio"){
              console.log("hello");
              this.show2 = true;
            }
            if(this.selectedNav.value === "multiselector"){
              console.log("hello");
              this.show6 = true;
            }
            if(this.selectedNav.value === "checkbox"){
              console.log("hello");
              this.show7 = true;
            }
            if(this.selectedNav.value === "description"){
              console.log("hello");
              this.show8 = true;
            }
        }

  
 }
