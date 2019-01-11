import {Component, Inject, EventEmitter, OnInit, OnDestroy,TemplateRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry, MatTableDataSource} from '@angular/material';
import { AddUserService } from '../../services/addUser.service';
import { AddUser } from '../../models/addUser';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/table';
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
arrdbjson: string [];
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


  // openUpdate(data): void {
  //   let dialogRef = this.dialog.open(UserUpdateComponent, {
  //     width: '400px',
  //     data: data
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     this.fetchUser();
  //   });

  // }

  fetchUser() {
    this.users = this.addUser.getUser()
    this.users.subscribe((data) => {
      this.dataSource = data;
      //console.log(this.dataSource);
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
  

  deleteUser(data) {
  //   if(user.User_Role_Id === "1"){
  //     alert("This is admin. You can't delete this user.")
  //   }
  //   else{
 //   alert("Do you wan't delete " + user.User_name);

    this.addUser.deleteUser(data.UserId).subscribe(res => {

      console.log("success");
      console.log(res);
      this.fetchUser();
    });
  }
  // }
  // let dialogRef = this.dialog.open(MatConfirmDialogComponent, {
  //   width: '400px',
  //   height: '150px',
  //   data: data
  // });

  // dialogRef.afterClosed().subscribe(() => {
  //   this.fetchUser();
  // });



}

@Component({
  templateUrl: 'users-dialogue.component.html',
  styleUrls: ['users-dialogue.component.scss']
})
 export class UserCreateComponent {

  createForm: FormGroup;
  private formSubmitAttempt: boolean;
 roles = new FormControl();
  public event: EventEmitter<any> = new EventEmitter();
  toppingList  = ['Clerk','Manager','Admin','GM'];
 data34: any[]=[];
 data35: any[]=[];
  _data1: any;
 getUserRoles(){

   // let record = this.addUser.getUserRole();
    this.addUser.getUserRole().subscribe(res => {
      // let roles = res[0].RoleName;
      // console.log(res)
       this._data1 = res;
    // console.log(_data1)
     let i=0;
     this._data1.forEach(element => {
       this.data34[i++] = element.RoleName;
     });

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
    roles: ['', Validators.required]
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
    // this.addUser.createUser(createForm).subscribe((res) => {
    //   console.log(res);
    //   this.dialogRef.close();
    //   this.router.navigate['/users']
    //   });
  }
  
  ngOnInit(){
  this.getUserRoles();
  }
 }

// @Component({
//     templateUrl: 'users-update.component.html',
//     styleUrls: ['users-dialogue.component.scss']
//   })
//   export class UserUpdateComponent implements OnInit{

//     public event: EventEmitter<any> = new EventEmitter();

//     updateForm: FormGroup;

//     constructor(
//       public dialogRef: MatDialogRef<UsersComponent>,
//       @Inject(MAT_DIALOG_DATA) public data: any,
//       private addUser: AddUserService,
//       private fb: FormBuilder,
//       private  router: Router
//     ) {
//       this.createForm();
//       console.log(this.data);
//     }



//     createForm() {
//       this.updateForm = this.fb.group({
//         username: [''],
//       firstname: ['', Validators.required],
//       lastname: ['', Validators.required],
//       email: ['', Validators.required],
//       phonenumber: ['',Validators.required],
//       password: ['', Validators.required]
//       })
//     }

//     onNoClick(): void {
//       this.dialogRef.close();
//     }


//   updateUser(firstname, lastname, username, phone, email, password){
//     this.addUser.updateUser(firstname, lastname, username, phone, email, password).subscribe((res) => {
//       this.dialogRef.close();
//       console.log(res);
//     });
//   }

//     ngOnInit() {
//       this.updateForm.get('firstname').setValue(this.data.First_name);
//       this.updateForm.get('lastname').setValue(this.data.Last_name);
//       this.updateForm.get('username').setValue(this.data.User_name);
//       this.updateForm.get('phonenumber').setValue(this.data.Phone_number);
//       this.updateForm.get('email').setValue(this.data.Email_id);
//       this.updateForm.get('password').setValue(this.data.User_pwd);
//     }

//   }


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
        if(this.data.User_Role_Id === '1'){
          this.message = "This is admin. You can't delete this user.";
        }
        else {
          this.message = "Do you wan't delete " + this.data.User_name + "?";
        }
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
