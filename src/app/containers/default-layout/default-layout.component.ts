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
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService, 
  private authUser: UserService, private router: Router) {

    this.user = JSON.parse(localStorage.getItem("user"));

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
    this.useridModulesfilter(this.userID);
  }

  //User Id based modules Api
userID:any;
navlist:any;
splicenav:any[]=[];
combine:any;

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

  this.combine = this.navlist.filter(element => this.splicenav.includes(element.name));
  console.log(this.combine)
  this.navlist = this.combine;
  console.log(this.navlist);
   
 
});
 
}


   ngOnInit() {
console.log(navItems);
  }



  logoutUser(){
    this.authUser.logout();
  }
}
