import {Component, Inject, EventEmitter, OnInit, OnDestroy,TemplateRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry, MatTableDataSource} from '@angular/material';
import { AddUserService } from '../../services/addUser.service';
import { AddUser } from '../../models/addUser';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/table';
import {ErrorStateMatcher} from '@angular/material/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { Component,  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormsModule } from '@angular/forms';



/**
 * @title Dialog Overview
 */
@Component({
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent implements OnInit {
  modalRef: BsModalRef;
   users: any;
//form: FormGroup;
 //rolename =['clerk','manager'];
// _url ='';
 //title = 'JSON to Table Example';
  


  constructor(private addUser: AddUserService, public dialog: MatDialog,private httpService: HttpClient,
    private router: Router,private modalService: BsModalService, private _http: HttpClient) {
  }
  // enrolluser(user: user){
  //   this._http.post<any>(this._url,user);
  // }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  displayedColumns = ['Firstname', 'Lastname', 'Username', 'UserEmail','UserPhone', 'Actions'];
  dataSource: any;
  


  openCreate(): void {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.fetchUser();
    });


   }


  openUpdate(data): void {
    let dialogRef = this.dialog.open(UserUpdateComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(() => {
      this.fetchUser();
    });

  }

  fetchUser() {
    this.users = this.addUser.getUser()
    this.users.subscribe((data) => {
      this.dataSource = data;
      console.log(this.dataSource);
    })
  }

  ngOnInit() {
    // this.httpService.get('./assets/dbjson.json').subscribe(
    //   data => {
    //     this.arrdbjson = data as string [];	 // FILL THE ARRAY WITH DATA.
    //      console.log(this.arrdbjson);
    //   },
    //   // (err: HttpErrorResponse) => {
    //   //   console.log (err.message);
    //   // }
    // );
   this.fetchUser();
   
     
  }

  ngOnDestroy(){
    this.dialog.closeAll();
  }
  
alertCtrl : any;
alert:any;
  deleteUser(data) {
    //  let dialogRef = this.dialog.open(MatConfirmDialogComponent, {
//     width: '400px',
//     height: '150px',
//     data: data
//   });
//dialogRef.afterClosed().subscribe(() => {
 //   this.fetchUser();
 // });

// console.log(data)
    alert("Do you wan't delete " + data.UserName);

      let UserId = {
        "UserId": data.UserId
      }

    this.addUser.deleteUser(UserId).subscribe(res => {
    
      console.log("success");
      console.log(res);
      this.fetchUser();
    });
  }
  }
  

  
@Component({
  templateUrl: 'users-dialogue.component.html',
  styleUrls: ['users-dialogue.component.scss']
})
 export class UserCreateComponent {

  createForm: FormGroup;
  private formSubmitAttempt: boolean;
 RoleId = new FormControl();
  public event: EventEmitter<any> = new EventEmitter();
  //toppingList  = ['Clerk','Manager','Admin','GM'];
 data34: any[]=[];
 data35: any[]=[];
  _data1: any;
  _data2: any;
  //data36: any[]=[];
 getUserRoles(){

   // let record = this.addUser.getUserRole();
    this.addUser.getUserRole().subscribe(res => {
       console.log(res)
       this._data1 = res;
     console.log(this._data1)
     let i=0;
     this._data1.forEach(element => {
       this.data34[i++] = element.RoleName;
     });
     // console.log(this.data35);
      console.log(this.data34);
    });
   
 }
  constructor(
    public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private addUser: AddUserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.fb.group({
    UserName: ['', Validators.required],
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    UserEmail: ['', Validators.required],
    UserPhone: ['',Validators.required],
    UserPwd: ['', Validators.required],
    RoleId: ['', Validators.required]
   // roleid: ['', Validators.required]
    })
  }

  isFieldInvalid(field: string) {
    return (
      (!this.createForm.get(field).valid && this.createForm.get(field).touched) ||
      (this.createForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createUser(createForm){

console.log(createForm);
    this.addUser.createUser(createForm).subscribe((res) => {
      console.log(res);
      this.dialogRef.close();
      this.router.navigate['/users']
      });
  }
  
  ngOnInit(){
  this.getUserRoles();
  }
 }

@Component({
    templateUrl: 'users-update.component.html',
    styleUrls: ['users-dialogue.component.scss']
  })
  export class UserUpdateComponent implements OnInit{
    _data2:any;
    dataupdaterole:any[]=[];

    _data
    data4: any;
 getUserRoles1(UserId){

   // let record = this.addUser.getUserRole();
    this.addUser.getUserRole().subscribe(res => {
       console.log(res)
       this._data2 = res;
     console.log(this._data2)
     let i=0;
     this._data2.forEach(element => {
       this.dataupdaterole[i++] = element.RoleName;
     });
     // console.log(this.data35);
      console.log(this.dataupdaterole);
    });
   
    this.addUser.getUserRoleSelected(UserId).subscribe(res =>{

       this.data4 = res.RoleId;
      console.log(this.data4);

      console.log(res);

    });
 }
    public event: EventEmitter<any> = new EventEmitter();

    updateForm: FormGroup;

    constructor(
      public dialogRef: MatDialogRef<UsersComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private addUser: AddUserService,
      private fb: FormBuilder,
      private  router: Router
    ) {
      this.createForm();
      console.log(this.data);
    }



    createForm() {
      this.updateForm = this.fb.group({
        UserName: [''],
         UserPwd: [''],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      UserEmail: ['', Validators.required],
      UserPhone: ['',Validators.required],
      RoleId:['',Validators.required]
      })
    }

    onNoClick(): void {
      this.dialogRef.close();
    }


  updateUser(createForm){
    console.log(createForm);
    this.addUser.updateUser(createForm, this.data.UserId).subscribe((res) => {
      this.dialogRef.close();
      console.log(res);
    });
  }

    ngOnInit() {
      this.updateForm.get('FirstName').setValue(this.data.FirstName);
      this.updateForm.get('LastName').setValue(this.data.LastName);
      this.updateForm.get('UserName').setValue(this.data.UserName);
      this.updateForm.get('UserPhone').setValue(this.data.UserPhone);
      this.updateForm.get('UserEmail').setValue(this.data.UserEmail);
      this.updateForm.get('UserPwd').setValue(this.data.UserPwd);
     // this.updateForm.get('RoleId').setValue(this.data.RoleId);
      this.getUserRoles1(this.data.UserId);

    }

  }


  @Component({
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.scss']
  })
  export class MatConfirmDialogComponent implements OnInit{

    message: any;

    constructor(
      public dialogRef: MatDialogRef<UsersComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,private addUser: AddUserService){
       console.log(this.data);
      }

      ngOnInit(){
           this.message = "Do you wan't delete " + this.data.UserName + "?";
      }

      deleteUser(){

              this.addUser.deleteUser(this.data.UserName).subscribe(() => {
               this.dialogRef.close();
            })

      }

      onNoClick(): void {
        this.dialogRef.close();
      }

  }
