import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, pipe } from 'rxjs';
import { API_URI } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'user';


@Injectable({
  providedIn: 'root',
})
export class BasicAuthentication {
  constructor(private http: HttpClient) {}

  executeBasicAuthentication(userName: string, password: string) {
    let basicAuthentication = 'Basic ' + window.btoa(userName + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthentication,
    });
    return this.http
      .get<AuthenticationBean>(`${API_URI}/basicAuth`, { headers })
      .pipe(
        map((data: any) => {
          sessionStorage.setItem(AUTHENTICATED_USER, userName);
          sessionStorage.setItem(TOKEN, basicAuthentication);
          return data;
        })
      );
  }

  executeJwtAuthentication(username: string, password: string) {
  
    return this.http
      .post<any>(`${API_URI}/authenticate`, {
        username,
        password
      })
      .pipe(
        map((data: any) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{
  constructor(public msg: string){

  }
}
