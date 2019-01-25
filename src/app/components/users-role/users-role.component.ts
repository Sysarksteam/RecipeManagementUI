import {Component, Inject, EventEmitter, OnInit, OnDestroy,TemplateRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry, MatTableDataSource} from '@angular/material';
import * as $ from 'jquery';
import { AddUser } from '../../models/addUser';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AddUserService } from '../../services/addUser.service';
import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-users-role',
  templateUrl: './users-role.component.html',
  styleUrls: ['./users-role.component.scss']
})
export class UsersRoleComponent implements OnInit {
//   access =['READ','WRITE'];
modalRef: BsModalRef;
// permission =['Dashboard','Usermanagement'];
//userRole = new usersrole('rolename','access','permission');
public data: any;

  constructor(private addUser:AddUserService,
   // private $modal: $ModalManagerService,
        private http: HttpClient,public dialog: MatDialog,  private fb: FormBuilder, private httpService: HttpClient, 
  ){
    //super();
  }
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

openCreateRole(): void {
    const dialogRef = this.dialog.open(UserRoleCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
     // this.fetchUser();
    });


   }

//RoleName Dropdown API

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

 //Permission DropDown API
selected:any;
selected1:any;
dataper: any[]=[];
dataperdis: any;
getpermissiondrop(){
  this.addUser.getpermission().subscribe(res => {
 console.log(res)
       this.dataperdis = res;
     console.log(this.dataperdis)
     let i=0;
     this.dataperdis.forEach(element => {
       this.dataper[i++] = element;
     });
     // console.log(this.data35);
      console.log(this.dataper);

  });

}

//Access DropDown API

dataAce: any[]=[];
dataacedis: any;
getaccessdrop(){
  this.addUser.getaccess().subscribe(res => {
 console.log(res)
       this.dataacedis = res;
     console.log(this.dataacedis)
     let i=0;
     this.dataacedis.forEach(element => {
       this.dataAce[i++] = element;
     });
     // console.log(this.data35);
      console.log(this.dataAce);

  });

}

addForm: FormGroup;
  ngOnInit() {
    this.getUserRoles();
    this.getpermissiondrop();
    this.getaccessdrop();
   // this.getUserRoleList();
    // console.log(this.arrdbadduser);
    // this.addForm = this.fb.group({
    //   id: [],
    //   RoleName: ['', Validators.required],
    //   AccessName: ['', Validators.required],
    //   permissionName: ['', Validators.required]
    // });
  }


}

@Component({
  templateUrl: 'users-role-dialogue.component.html',
  styleUrls: ['users-role-dialogue.component.scss']
})
 export class UserRoleCreateComponent {

 // createForm: FormGroup;
  private formSubmitAttempt: boolean;
 RoleId = new FormControl();
 createRoleForm: FormGroup;
  public event: EventEmitter<any> = new EventEmitter();
  //toppingList  = ['Clerk','Manager','Admin','GM'];

  
  constructor(
    public dialogRef: MatDialogRef<UsersRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private addUserRole: AddUserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createRoleForm = this.fb.group({
    RoleName: ['', Validators.required],
    Access: ['', Validators.required],
    Permission: ['', Validators.required]
   // roleid: ['', Validators.required]
    })
  }

  // isFieldInvalid(field: string) {
  //   return (
  //     (!this.createForm.get(field).valid && this.createForm.get(field).touched) ||
  //     (this.createForm.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }



  



  onNoClick(): void {
    this.dialogRef.close();
  }

  createUser(createRoleForm){

console.log(createRoleForm);
    // this.addUserRole.createUserRole(createRoleForm).subscribe((res) => {
    //   console.log(res);
    //   this.dialogRef.close();
    //   this.router.navigate['/users']
    //   });
  }
  
  ngOnInit(){
  
  }
 }



  @Component({
    templateUrl: 'dialogRole.component.html',
    styleUrls: ['dialogRole.component.scss']
  })
  export class MatConfirmDialogComponent implements OnInit{

    message: any;

    constructor(
      public dialogRef: MatDialogRef<UsersRoleComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,private addUserRole: AddUserService){
       console.log(this.data);
      }

      ngOnInit(){
          // this.message = "Do you wan't delete " + this.data.UserName + "?";
      }


      onNoClick(): void {
        this.dialogRef.close();
      }

  }

