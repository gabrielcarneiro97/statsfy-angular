import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken : string;
  refreshToken : string;
  expiresIn : Date;

  constructor() { }

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

  refresh() {}

  logout() {
    this.unsetExpiresIn();
    this.unsetRefresh();
    this.unsetAccess();
  }

  isAuth() {
    if (!this.refreshToken) {
      this.getRefresh();
    }

    return !!this.refreshToken;
  }

}
