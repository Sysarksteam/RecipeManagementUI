import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-role',
  templateUrl: './users-role.component.html',
  styleUrls: ['./users-role.component.scss']
})
export class UsersRoleComponent implements OnInit {
  access =['read','write'];
permission =['dashboard','usermanagement'];
userRole = new usersrole('rolename','access','permission');
public data: any;
  constructor(
   // private $modal: $ModalManagerService,
        private http: HttpClient, private httpService: HttpClient
  ){
    //super();
  }
arrdbadduser: string [];

  ngOnInit() {
    this.httpService.get('./assets/dbadduser.json').subscribe(
      data => {
        this.arrdbadduser = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      // (err: HttpErrorResponse) => {
      //   console.log (err.message);
      // }
    );
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
