import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isAuth : boolean;

  constructor(
    private auth : AuthService,
    private router: Router,
  ) {
    this.auth.isAuth.subscribe((obs) => {
      this.isAuth = obs.valueOf();
    });
  }

  canActivate() {
    if (this.isAuth) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
