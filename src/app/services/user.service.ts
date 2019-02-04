import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

// domain = 'https://wildseve-node.appspot.com/';
domain = 'http://192.168.0.120/';
authToken;
user;
options;

  constructor(private http: HttpClient) { }

login(userName) {
 // console.log(userName);
  //console.log( this.http.get(this.domain + 'api/UserRole/ValidateUser?userName=', userName));
  return this.http.get(this.domain + '/api/User/ValidateUser?userName='+ userName)
  .pipe(map(res => {
    console.log(res);
    localStorage.setItem('user', JSON.stringify(res));
    localStorage;
    return res;
  }));
  
}

loginpass(passWord,userId){  
  return this.http.get(this.domain + 'api/User/ValidatePassword?UserId=' + userId + '&password=' + passWord);
}

// Function to logout
logout() {
  // this.authToken = null; // Set token to null
  // this.user = null; // Set user to null
  localStorage.clear(); // Clear local storage
}

UseridsModulesFilter(userID): Observable<any> {
    return this.http.get(this.domain +'api/User/GetPermissionName/' + userID);

}

}


