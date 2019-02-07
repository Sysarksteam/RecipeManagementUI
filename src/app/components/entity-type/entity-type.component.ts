import { Component, OnInit , Inject} from '@angular/core';
//import {Component, Inject, EventEmitter, OnInit, OnDestroy,TemplateRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/table';
import { AddUserService } from '../../services/addUser.service';
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

  constructor(private httpService: HttpClient, private addUser: AddUserService, public dialog: MatDialog) { }
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

   //Module name and user id Object Creation
object2:any;
userid:any;
aName;any;
modulename = "Recipe Management";


//UserId And Modulename Based Api
modulesUserIds3(){
  this.userid = localStorage.getItem('user');
this.aName = this.modulename;
  this.addUser.modulesUserId(this.userid,this.aName).subscribe(res =>{
    console.log(res);
  });
}

  
  ngOnInit() {
    this.modulesUserIds3();
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
    private addUser: AddUserService,
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
selected:any;
private fieldArray: Array<any> = [{option:"",condition:"condition",value:"value"}];

 Options = [
    {value:"text",valueFieldType:'text',viewValue:"Field 1"},
    {value:"dropdown",valueFieldType:'dropdown',viewValue:"Field 2"},
    {value:"radio",valueFieldType:'radio',viewValue:"Field 3"},
    {value:"multiselector",valueFieldType:'multiselector',viewValue:"Field 4"},
    {value:"checkbox",valueFieldType:'checkbox',viewValue:"Field 5"},
    {value:"description",valueFieldType:'description',viewValue:"Field 5"}
  ]
  
  
 }
