import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken : BehaviorSubject<string>;
  refreshToken : string;
  expiresIn : Date;
  isAuth : Observable<boolean>;
  changeAuth : Subscriber<boolean>;

  constructor(private http : HttpClient) {
    this.load();

    this.isAuth = new Observable((observable) => {
      this.changeAuth = observable;
      observable.next(this.checkAuth());
    });

    this.refresh();
    setInterval(this.refresh, 3500000);
  }

  load() {
    this.getRefresh();
    this.getAccess();
    this.getExpiresIn();
  }

  getExpiresIn() {
    if (!this.expiresIn) {
      const fromStorage = localStorage.getItem('expiresIn');
      this.expiresIn = new Date(parseInt(fromStorage, 10));
    }

    return this.expiresIn;
  }

  getRefresh() {
    if (!this.refreshToken) {
      this.refreshToken = localStorage.getItem('refreshToken');
    }

    return this.refreshToken;
  }

  getAccess() {
    if (!this.accessToken) {
      this.accessToken = new BehaviorSubject(localStorage.getItem('accessToken'));
    }

    return this.accessToken;
  }

  setExpiresIn(expiresIn : Date) {
    localStorage.setItem('expiresIn', expiresIn.getTime().toString());
    this.expiresIn = expiresIn;
  }

  setRefresh(refreshToken : string) {
    localStorage.setItem('refreshToken', refreshToken);
    this.refreshToken = refreshToken;
  }

  setAccess(accessToken : string) {
    localStorage.setItem('accessToken', accessToken);
    console.log(accessToken);
    if (this.accessToken) {
      this.accessToken.next(accessToken);
    } else {
      this.accessToken = new BehaviorSubject(accessToken);
    }
  }

  setAll(accessToken : string, refreshToken : string, expiresIn : Date) {
    this.setAccess(accessToken);
    if (refreshToken) this.setRefresh(refreshToken);
    this.setExpiresIn(expiresIn);
    this.changeAuth.next(true);
  }

  unsetExpiresIn() {
    localStorage.removeItem('expiresIn');
    this.expiresIn = undefined;
  }

  unsetRefresh() {
    localStorage.removeItem('refreshToken');
    this.refreshToken = undefined;
  }

  unsetAccess() {
    localStorage.removeItem('accessToken');
    this.accessToken = undefined;
  }

  fromQuery(query : { access_token : string, expires_in : string, refresh_token : string }) {
    const expiresIn = new Date(new Date().getTime() + (parseInt(query.expires_in, 10) * 1000));
    this.setAll(query.access_token, query.refresh_token, expiresIn);
  }

  refresh() {
    const refresh = this.getRefresh();
    const obs = this.http.get(`/api/refresh/${refresh}`);
    obs.subscribe((data) => {
      this.fromQuery(data as any);
    });
  }

  logout() {
    this.unsetExpiresIn();
    this.unsetRefresh();
    this.unsetAccess();
    this.changeAuth.next(false);
  }

  checkAuth() {
    if (!this.refreshToken) {
      this.getRefresh();
    }

    return !!this.refreshToken;
  }

}
