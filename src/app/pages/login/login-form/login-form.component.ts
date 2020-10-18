import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import { environment } from '../../../../environments/environment';

const { api } = environment;


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  faSpotify = faSpotify;

  constructor(private http: HttpClient) { }

  login() {
    this.http.get(`${api}/autorize`).toPromise().then(({ url } : any) => {
      window.location = url;
    });
  }

  ngOnInit(): void {
  }

}
