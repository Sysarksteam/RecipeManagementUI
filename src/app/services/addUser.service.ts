import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AddUser } from './../models/addUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AddUserService {

  //private uri = './assets/dbjson.json';
  private uri = 'http://192.168.0.128/';


  constructor(private http: HttpClient) {
  }


  createUser(createForm)
  {
    
      return this.http.post(this.uri + 'api/UserTbls/PostUserRoleTbl', createForm);

  }


  // updateUser(firstname, lastname, username, phone, email, password)
  // {
  //   const update_user  = {
  //     firstname: firstname,
  //     lastname: lastname,
  //     username: username,
  //     phone: phone,
  //     email: email,
  //     password: password,
  //   };
  //     return this.http.post(this.uri + 'updateuser', update_user);
  // }

  getUser(): Observable<any> {
    return this.http.get(this.uri + 'api/UserTbls/GetUserTbls');
  }

  getUserRole():Observable<any> {
    return this.http.get(this.uri + 'api/UserTbls/GetRoleTbls');
  }
  

  deleteUser(id): Observable<any> {
    
    return this.http.delete(this.uri + 'api/UserTbls/DeleteUserTbl/' + id);
  
  }

}
