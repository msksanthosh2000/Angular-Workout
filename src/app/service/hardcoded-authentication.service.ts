import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  authenticate(user: string, password: string){
    if (user == 'sandy' && password == 'sandy') {
      sessionStorage.setItem('user', user);
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('user');
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('user');
  }

  constructor() { }
}
