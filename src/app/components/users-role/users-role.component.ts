import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { AddUserService } from '../../services/addUser.service';
import { FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-role',
  templateUrl: './users-role.component.html',
  styleUrls: ['./users-role.component.scss']
})
export class UsersRoleComponent implements OnInit {
//   access =['READ','WRITE'];
// permission =['Dashboard','Usermanagement'];
userRole = new usersrole('rolename','access','permission');
public data: any;
createForm: FormGroup;
  constructor(
   // private $modal: $ModalManagerService,
        private http: HttpClient,  private fb: FormBuilder, private httpService: HttpClient, private addUser:AddUserService,
  ){
    //super();
    this.createForm = this.fb.group({
    Access: ['', Validators.required],
 Permission:['', Validators.required],
 RoleName:['', Validators.required]
   // roleid: ['', Validators.required]
    })
  }
//arrdbadduser: string [];

//Permission DropDown API
selected:any;
selected1:any;
dataper: any[]=[];
dataperdis: any;
getpermissiondrop(){
  this.addUser.getpermission().subscribe(res => {
// console.log(res)
       this.dataper = res;

console.log(this.dataper);
console.log(Object.values(this.dataper)[0]);
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
    let userid = localStorage.getItem('user');
      console.log(this.data34);
      console.log(userid,"UserId")
    });
   
 }
//Access DropDown API

dataAce: any[]=[];
dataacedis: any;
getaccessdrop(){
  this.addUser.getaccess().subscribe(res => {
 //console.log(res)
       this.dataAce = res;

     // console.log(this.data35);
      console.log(this.dataAce);
      console.log(Object.values(this.dataAce)[0]);

  });

}
arrdbadduser:any;
// createUser(createForm) {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     let body = JSON.stringify(createForm);
//     return this.http.post('access', body, options );
//   }
// createRole(createForm){
//   let UserId = JSON.parse(localStorage.getItem("user"));
//   console.log(createForm);
//  let  rolePermisson: any = {
//    UserId: UserId,
//    AccessId: createForm.Access.AccessId,
//    PermissionId: createForm.Permission.PermissionId
//  }
//  console.log(rolePermisson);
//  this.addUser.roleAccPerm(rolePermisson)
//       .subscribe( data => {
//    //     console.log(data);
//         this.arrdbadduser = data;
//         console.log(this.arrdbadduser)


//        // this.router.navigate(['list-user']);
// //       this.getUserRoleList();
//       });
// }

// getUserRoleList(){
// this.addUser.getUserRoles().subscribe(res =>{
//   console.log(res);
//   this.arrdbadduser = res;
// });
// }

// deleteUserRole(createForm){
//   this.addUser.delUserRole(createForm.id).subscribe(res => {
//     console.log(res);
//     this.getUserRoleList();
//   });
// }
createUserRole(createRoleForm){
console.log(createRoleForm)
let UserId = JSON.parse(localStorage.getItem("user"));
 let  rolePermisson: any = {
   UserId: UserId,
   RoleId: createRoleForm.RoleId
 }
 console.log(rolePermisson)
}



       // this.router.navigate(['list-user']);
//       this.getUserRoleList();


//addForm: FormGroup;
createRoleForm: FormGroup;
  ngOnInit() {
    this.getpermissiondrop();
    this.getUserRoles();
    this.getaccessdrop();
//    this.getUserRoleList();
 //   console.log(this.arrdbadduser);
    this.createRoleForm = this.fb.group({
      id: [],
      RoleId: ['', Validators.required],
      Access: ['', Validators.required],
      Permission: ['', Validators.required]
    });
  }


}
export class usersrole{
  constructor(
    public rolename: string,
    public access: string,
    public permission: string
  ){

  }
}
