import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken : string;
  refreshToken : string;
  expiresIn : Date;
  isAuth : Observable<boolean>;
  changeAuth : Subscriber<boolean>;

  constructor(private http : HttpClient) {
    this.isAuth = new Observable((observable) => {
      this.changeAuth = observable;
      observable.next(this.checkAuth());
    });
  }

  getExires() {
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
      this.accessToken = localStorage.getItem('accessToken');
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
    this.accessToken = accessToken;
  }

  setAll(accessToken : string, refreshToken : string, expiresIn : Date) {
    this.setAccess(accessToken);
    this.setRefresh(refreshToken);
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

  async refresh() {
    const refresh = this.getRefresh();
    const res = await this.http.get(`/api/refresh/${refresh}`).toPromise();
    this.fromQuery(res as any);

    return true;
  }

  async check() {
    if (this.expiresIn.getTime() < new Date().getTime()) {
      await this.refresh();
    }
  }

  async checkAndGetAccess() {
    await this.check();
    return this.accessToken;
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
