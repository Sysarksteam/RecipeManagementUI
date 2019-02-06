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
userRole = new usersrole('rolename','access','permission');
displayedColumns = ['Access','Permission','Action'];
public data: any;
createForm: FormGroup;
  constructor(
        private http: HttpClient,  private fb: FormBuilder, private httpService: HttpClient, private addUser:AddUserService,
  ){
    this.createForm = this.fb.group({
    Access: ['', Validators.required],
 Permission:['', Validators.required],
 RoleName:['', Validators.required]
    })
  }

//Module name and user id Object Creation

modulename = "UserRoleManagement";
aName:any;
userid:any;
objcreation(){

this.userid = localStorage.getItem('user')
this.aName = this.modulename;
console.log(this.userid, this.aName);
}

//UserId And Modulename Based Api
modulesUserIds(userid,aName){
  console.log(userid,aName)
  this.addUser.modulesUserId(userid,aName).subscribe(res =>{
    console.log(res);
  });
}


//Permission DropDown API
selected:any;
selected1:any;
selectedrole:any;
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
    this.rolenameValidation(this.createForm,this.Rolenm)
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
      //  let accessName: any = this.userExists(3,4);
      //  console.log(accessName[0]);
      //  console.log(accessName[1]);
     // console.log(this.data35);
      console.log(this.dataAce);
      console.log(Object.values(this.dataAce)[0]);

  });

}

// //Mapping Access and permission id's with Access and permission name
//  userExists(AccessId, PermId):any {
//    let  varName = '';
//    this.dataAce.forEach(el => {
//      if(el.AccessId === AccessId){
//       varName = el.AccessName;
//      }

//    });
//   let  varName2 = '';
//    this.dataper.forEach(el => {
//      if(el.PermissionId === PermId){
//       varName2 = el.PermissionName;
//      }
//    })
//    return [varName,varName2];
// }


//Adding data to table Display in Front End
accesspertable: any;
tablearr: any;
datasave: any[]=[];

createUserRole(createRoleForm){
  // this.show1 = true;
  // this.hide = false;
  // this.show = true;
  // this.showc = false;
  let UserId = JSON.parse(localStorage.getItem("user"));
   let  rolePermisson: any = {
   UserId: UserId,
   AccessId:createRoleForm.Access,

   PermissionId:createRoleForm.Permission
 }

 
console.log(rolePermisson)
  this.addUser.CreateUserRole(rolePermisson).subscribe(res => {
    console.log(res);
    let i=0;
    let accName:any;
    let perName:any;
    res.forEach(element =>{
    this.dataAce.forEach(ele => {
      if(element.AccessId === ele.AccessId ){
        accName = ele.AccessName;
      }
    });
    this.dataper.forEach(elem=>{
       if(element.PermissionId === elem.PermissionId ){
        perName = elem.PermissionName;
      }
    });
    this.datasave.push({
      AccessName :accName,
      PermissionName: perName
    });
    });
  });
}

dataupdate:any[]=[];
//Update User Role
updateUserRole(createRoleForm){
console.log(createRoleForm)
console.log(event);
  let UserId = JSON.parse(localStorage.getItem("user"));
   let  updateroles: any = {
   role: createRoleForm.value.RoleId,
   UserId: UserId
 }
 this.addUser.addNewcancelBtn(UserId).subscribe((res) => {
  console.log(res); 
});

  this.addUser.updateRole(updateroles).subscribe((res) => {
    this.datasave.length = 0;
    // this.datasave.splice(0,this.datasave.length);
    console.log(res);
    let i=0;
    let accid:any;
    let perid:any;
    res.forEach(element =>{
    this.dataAce.forEach(ele => {
      if(element.AccessId === ele.AccessId ){
        accid = ele.AccessName;
      }
    });
    this.dataper.forEach(elem=>{
       if(element.PermissionId === elem.PermissionId ){
        perid = elem.PermissionName;
      }
    });

    this.datasave.push({
      AccessName :accid,
      PermissionName: perid
    });
    });
  });
}

showc = false;
hide= false;
show= true;
show1= true;
userID:any;
createnewrole(){
  this.hide = true;
  this.show = false;
  this.show1 = false;
  this.showc = true;
  this.userID = localStorage.getItem('user')
  console.log(this.userID)
this.addUser.addNewcancelBtn(this.userID).subscribe((res) => {
  console.log(res); 
});

}

 deleteUserRoles(deleterole){
let accid:any;
let perid:any;
console.log(deleterole)
    this.dataAce.forEach(ele => {
      if(deleterole.AccessName === ele.AccessName ){
        accid = ele.AccessId;
      }
    });
    this.dataper.forEach(elem=>{
       if(deleterole.PermissionName === elem.PermissionName ){
        perid = elem.PermissionId;
      }
    });
   let UserId = JSON.parse(localStorage.getItem("user"));
   let  deleteroles: any = {
   UserId: UserId,
   AccessId:accid,
   PermissionId:perid
 }
 console.log(deleteroles);
 this.addUser.deleteUserRole(deleteroles).subscribe((res) => {
  console.log(res);
 });
   }

createRoleForm: FormGroup;
varNameidf:any;
Rolenm:any;
rolenameValidation(createForm,Rolenm):any{
      //  console.log(createRoleForm.value.RoleName)
        Rolenm =  this.createRoleForm.value.RoleName;
        console.log(Rolenm);
        this._data1.forEach(el => {
      if(el.RoleName === Rolenm){
      alert("RoleName Already Exist");
     // this.disableField();     
    }
    else{
     // this.enableField();
        }
   })
}

//Field Disable Function

disableField() {
    // this.createForm.controls['Access'].disable(); // Disable username field
    // this.createForm.controls['Permission'].disable(); // Disable password field
  (<HTMLInputElement> document.getElementById("Access")).disabled = true;
  (<HTMLInputElement> document.getElementById("Permission")).disabled = true;
}​

//Field Enable Function
enableField() {
  (<HTMLInputElement> document.getElementById("Access")).disabled = false;
  (<HTMLInputElement> document.getElementById("Permission")).disabled = false;
}​

_data4: any;
  ngOnInit() {
    this.getUserRoles();
    this.getpermissiondrop();
    this.getaccessdrop();
    this.objcreation();
    this.modulesUserIds(this.userid,this.aName);
   // this.rolenameValidation(this.createRoleForm);
    
    // this.addUser.getUserRole().subscribe(res => {
    //    console.log(res)
    //    this._data4 = res;
    //   });
    this.createRoleForm = this.fb.group({
      id: [],
      RoleId: [''],
      Access: [''],
      Permission: [''],
      RoleName: ['']
    });
  }


//Final save To Db Function
finalsave(createRoleForm){
   let UserId = JSON.parse(localStorage.getItem("user"));
   console.log(createRoleForm);
   let  finalsave: any = {
   UserId: UserId,
   RoleName:createRoleForm.RoleName=="" ? createRoleForm.RoleId.RoleName : createRoleForm.RoleName
 }
 console.log(finalsave);
 this.addUser.createfinalsave(finalsave).subscribe((res) => {
  console.log(res);
 });
this.createRoleForm.reset();
alert("Added Successfully");
this.datasave.length = 0; 
}

//Cancel Button Function
createnewrolecancel(){
  this.hide = false;
  this.show = true;
  this.show1 = true;
  this.showc = false;
  this.userID = localStorage.getItem('user')
  console.log(this.userID)
this.addUser.addNewcancelBtn(this.userID).subscribe((res) => {
console.log(res); 
});


}

//console.log(this.roles);
//roles:any;


}
export class usersrole{
  constructor(
    public rolename: string,
    public access: string,
    public permission: string
  ){

  }
}
