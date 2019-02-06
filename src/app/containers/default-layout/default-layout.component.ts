import { Component, Input, OnInit, Inject, AfterViewInit } from '@angular/core';
import { navItems } from '../../_nav';
import { LOCAL_STORAGE, WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
   roleId = this.storage.get('roleId');

  user: any = "";
  userName: any = "";


  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService, private authUser: UserService, private router: Router) {

    this.user = JSON.parse(localStorage.getItem("user"));

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  //User Id based modules Api
userID:any;
navlist:any;
navArray:any[];
peruser:any;
splicenav:any[]=[];

useridModulesfilter(userID){
  this.userID = localStorage.getItem('user')
  console.log(this.userID)
  this.navlist = navItems;
  //this.navlist.length = 0;  
  this.authUser.UseridsModulesFilter(this.userID).subscribe(res =>{
    console.log(res);
    console.log(this.navlist);
    let j=0;
    res.forEach(element =>{
      this.splicenav[j++] = element;
    })
    console.log(this.splicenav)
    // res.forEach(element => {
     this.peruser = "UserRoleManagement";
       console.log(this.peruser)  
       
    // });


    let i;
    let index:any;
  for(i = 0; i < this.navlist.length; i++){ 
  if ( this.navlist[i].name === this.peruser) {
    this.navlist.splice(-i,1);
   }  
  }
  
  console.log(this.navlist);
   
 
});
}

   ngOnInit() {
     this.useridModulesfilter(this.userID);

console.log(navItems);
  }



  logoutUser(){
    this.authUser.logout();
  }
}
