import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  sub : Subscription;
  isAuth : boolean;

  constructor(
    private auth : AuthService,
    private router : Router,
    ) { }

  ngOnInit(): void {
    this.sub = this.auth.isAuth.subscribe((obs) => {
      this.isAuth = obs.valueOf();

      if (this.isAuth) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
