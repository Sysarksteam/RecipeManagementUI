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
 //  this.rolenameValidation(createRoleForm:any);
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
      //  let accessName: any = this.userExists(3,4);
      //  console.log(accessName[0]);
      //  console.log(accessName[1]);
     // console.log(this.data35);
      console.log(this.dataAce);
      console.log(Object.values(this.dataAce)[0]);

  });

}

//Mapping Access and permission id's with Access and permission name
 userExists(AccessId, PermId):any {
   let  varName = '';
   this.dataAce.forEach(el => {
     if(el.AccessId === AccessId){
      varName = el.AccessName; 
     }
     
   });
  let  varName2 = '';
   this.dataper.forEach(el => {
     if(el.PermissionId === PermId){
      varName2 = el.PermissionName;
     }
   })
   return [varName,varName2]; 
}

//Mapping Access and permission names's with Access and permission id's
userids(Accessnam, Permname):any {
   let  varNameid ;
   this.dataAce.forEach(el => {
     if(el.AccessName === Accessnam){
      varNameid = el.AccessId; 
     }
     
   });
  let  varNameid2;
   this.dataper.forEach(el => {
     if(el.PermissionName === Permname){
      varNameid2 = el.PermissionId;
     }
   })
   return [varNameid,varNameid2]; 
}

//Adding data to table Display in Front End
accesspertable: any;
tablearr: any[]=[];

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
  this.addUser.CreateUserRole(rolePermisson).subscribe((res) => {
    console.log(res);
    let accessids = res.AccessId;
    console.log(accessids);
    let perids = res.PermissionId;
    console.log(perids);
   let accper = this.userExists(accessids,perids);
   console.log(accper);
   let tableobj = {AcessName:accper[0],
   PermissionName:accper[1]};
   this.tablearr.push(tableobj);
   console.log(this.tablearr);
  });
}

updateUserRole(createRoleForm){
console.log(createRoleForm)
console.log(event);
  let UserId = JSON.parse(localStorage.getItem("user"));
   let  updateroles: any = {
   role: createRoleForm.value.RoleId,
   UserId: UserId
 }
  this.addUser.updateRole(updateroles).subscribe((res) => {
    console.log(res);
    let accessids = res.AccessId;
    console.log(accessids);
    let perids = res.PermissionId;
    console.log(perids);
   let accper = this.userExists(accessids,perids);
   console.log(accper);
   let tableobj = {AcessName:accper[0],
   PermissionName:accper[1]};
   this.tablearr.push(tableobj);
   console.log(this.tablearr);
  });

 console.log(updateroles)
}

showc = false;
hide= false;
show= true;
show1= true;
createnewrole(){

  this.hide = true;
  this.show = false;
  this.show1 = false;
  this.showc = true;

}

 deleteUserRoles(deleterole){
  
console.log(deleterole)
let accessids = deleterole.AcessName;
    console.log(accessids);
    let perids = deleterole.PermissionName;
    console.log(perids);
   let accper = this.userids(accessids, perids);
   console.log(accper);
   let UserId = JSON.parse(localStorage.getItem("user"));
   let  deleteroles: any = {
   UserId: UserId,
   AccessId:accper[0],
   PermissionId:accper[1] 
 }
 console.log(deleteroles);
 this.addUser.deleteUserRole(deleteroles).subscribe((res) => {
  console.log(res);
 });
   }

createRoleForm: FormGroup;
varNameidf:any;
rolenameValidation(createRoleForm){
     $('#target').on('blur', function() {
       console.log(createRoleForm.value.RoleName)
      alert("Entered");
      let rolename =  createRoleForm.value.RoleName;
        console.log(rolename);
        let res1 = this._data4;
        console.log(res1);
    
     });
}
_data4: any;
  ngOnInit() {
    this.getUserRoles();
    this.getpermissiondrop();
    this.getaccessdrop();
    this.addUser.getUserRole().subscribe(res => {
       console.log(res)
       this._data4 = res;
      });
    this.createRoleForm = this.fb.group({
      id: [],
      RoleId: ['', Validators.required],
      Access: ['', Validators.required],
      Permission: ['', Validators.required],
      RoleName: ['', Validators.required]
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

}

//Cancel Button Function
createnewrolecancel(){
  this.hide = false;
  this.show = true;
  this.show1 = true;
  this.showc = false;

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
