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
arrdbadduser:any[]=[];
// createUser(createForm) {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     let body = JSON.stringify(createForm);
//     return this.http.post('access', body, options );
//   }
createUser(createForm){
 this.addUser.userRole(createForm)
      .subscribe( data => {
        console.log(data);
       // this.router.navigate(['list-user']);
      });
}

addForm: FormGroup;
  ngOnInit() {
    this.getpermissiondrop();
    this.getaccessdrop();
    console.log(this.arrdbadduser);
    this.addForm = this.fb.group({
      id: [],
      RoleName: ['', Validators.required],
      AccessName: ['', Validators.required],
      permissionName: ['', Validators.required]
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
