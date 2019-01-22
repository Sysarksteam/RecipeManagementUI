import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AddUser } from './../models/addUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddUserService {

  //private uri = './assets/dbjson.json';
  private uri = 'http://192.168.0.120/';
  private uri1 = 'http://192.168.0.120/'


  constructor(private http: HttpClient) {
  }


  createUser(createForm)
  {
    console.log(createForm);
      return this.http.post(this.uri1 + 'api/User/AddUserRoleTbl', createForm);

  }


  updateUser(createForm, UserId)
  {
    const update_user  = {
      FirstName: createForm.FirstName,
      LastName: createForm.LastName,
      UserName: createForm.UserName,
      UserPhone: createForm.UserPhone,
      UserEmail: createForm.UserEmail,
      UserPwd: createForm.UserPwd,
      RoleId: createForm.RoleId
    };
      return this.http.put(this.uri1 + 'api/User/UpdateUser/' + UserId, update_user);
  }

  getUser(): Observable<any> {
    return this.http.get(this.uri + '/api/User/GetUserTbls');
  }

  getUserRole():Observable<any> {
    return this.http.get(this.uri1 + 'api/User/GetRoleTbls');
  }
  
  getUserRoleSelected(UserId):Observable<any>{
    return this.http.get(this.uri1 + 'api/UserRole/GetUser/'+UserId);
  }

  deleteUser(UserId): Observable<any> {
    console.log(UserId);
    return this.http.post(this.uri1 +'api/User/DeleteUser',UserId);
    
  }

}
