import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthentication } from '../basic-authentication.service';

export class HelloWorldBean {
  constructor(public msg: String) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient,
    private basicAuthentication: BasicAuthentication
  ) {}

  executeHelloWorldService() {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    );
  }

  executeHelloWorldPathVariable(name: string) {
    // let basicAuthentication = this.createBasicAuthentication();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthenticationToken,
    // });
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world-path-variable/${name}`,
      // {headers}
    );
  }

  // createBasicAuthentication() {
  //   let userName = 'user';
  //   let password = 'password';
  //   let basicAuthentication = 'Basic ' + window.btoa(userName + ':' + password);
  //   return basicAuthentication;
  // }
}
