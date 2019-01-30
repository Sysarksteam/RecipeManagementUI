import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AddUser } from './../models/addUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddUserService {

  //private uri = './assets/dbjson.json';
  private baseUrl = 'http://localhost:3000/';
  private uri1 = 'http://192.168.0.120/'


  constructor(private http: HttpClient) {
  }


  createUser(createForm)
  {
    console.log(createForm);
      return this.http.post(this.uri1 + 'api/User/AddUserRoleTbl', createForm);

  }

// create Role APi
CreateUserRole(createRoleForm){

    return this.http.post(this.uri1 + 'api/User/AddTempAccessPermissionTbl', createRoleForm);
}

//Update Role API
 updateRole(createRoleForm)
  {
      return this.http.put(this.uri1 + 'api/User/UpdateAccessPermissionTbl', createRoleForm);
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
    return this.http.get(this.uri1 + '/api/User/GetUserTbls');
  }

  getUserRole():Observable<any> {
    return this.http.get(this.uri1 + 'api/User/GetRoleTbls');
  }

  getpermission():Observable<any> {
    return this.http.get(this.uri1 + 'api/User/GetPermission');
  }

  getaccess():Observable<any> {
    return this.http.get(this.uri1 + 'api/User/GetAccessTbl');
  }


  getUserRoleSelected(UserId):Observable<any>{
    return this.http.get(this.uri1 + 'api/User/GetUser/'+UserId);
  }

  deleteUser(UserId): Observable<any> {
    console.log(UserId);
    return this.http.post(this.uri1 +'api/User/DeleteUser',UserId);

  }


deleteUserRole(deleterole): Observable<any> {
    //console.log(deleterole);
    return this.http.post(this.uri1 +'api/User/DelTempAccessPermissionTbl',deleterole);

  }

createfinalsave(createRoleForm): Observable<any> {
    //console.log(deleterole);
    return this.http.post(this.uri1 +'api/User/AddRoleTblAndRoleAccessPermissionTbl	',createRoleForm);
  }


}
