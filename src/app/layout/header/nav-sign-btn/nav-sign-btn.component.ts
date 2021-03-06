import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-sign-btn',
  templateUrl: './nav-sign-btn.component.html',
  styleUrls: ['./nav-sign-btn.component.scss']
})
export class NavSignBtnComponent implements OnInit, OnDestroy {
  icon;
  isAuthSub : Subscription;
  isAuth : boolean;

  constructor(
    private auth : AuthService,
    private router : Router,
  ) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  login() {
    this.router.navigate(['login']);
  }

  click() {
    if (this.isAuth) {
      this.logout();
    } else {
      this.login();
    }
  }

  ngOnInit(): void {
    this.isAuthSub = this.auth.isAuth.subscribe((obs) => {
      this.isAuth = obs.valueOf();
      this.icon = this.isAuth ? faSignOutAlt : faSignInAlt;
    });
  }

  ngOnDestroy() {
    this.isAuthSub.unsubscribe();
  }

}
