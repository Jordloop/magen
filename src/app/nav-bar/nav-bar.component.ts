import { AuthService } from './../shared/security/auth.service';
import { Component, OnInit } from '@angular/core';
import {AuthInfo} from "../shared/security/auth-info";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  authInfo: AuthInfo;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.authSvc.authInfo$.subscribe(authInfo => this.authInfo = authInfo);
  }


  logout() {
    this.authSvc.logout();
  }

}
