import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AddUser } from './../models/addUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddUserService {

  //private uri = './assets/dbjson.json';
  private uri = 'http://192.168.0.128:81/';
  private uri1 = 'http://192.168.0.128/'


  constructor(private http: HttpClient) {
  }


  createUser(createForm)
  {
    
      return this.http.post(this.uri + 'api/UserTbls/PostUserRoleTbl', createForm);

  }


  updateUser(createForm)
  {
    const update_user  = {
      FirstName: createForm.FirstName,
      LastName: createForm.LastName,
      UserName: createForm.UserName,
      UserPhone: createForm.UserPhone,
      UserEmail: createForm.UserEmail,
      UserPwd: createForm.UserPwd,
      roles: createForm.roles
    };
      return this.http.post(this.uri1 + 'updateuser', update_user);
  }

  getUser(): Observable<any> {
    return this.http.get(this.uri + 'api/UserTbls/GetUserTbls');
  }

  getUserRole():Observable<any> {
    return this.http.get(this.uri1 + 'api/User/GetRoleTbls');
  }
  

  deleteUser(UserId): Observable<any> {
    console.log(UserId);
    return this.http.post(this.uri1 +'api/User/DeleteUser',UserId);
    
  }

}
