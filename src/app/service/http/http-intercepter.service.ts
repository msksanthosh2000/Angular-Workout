import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
import { Observable } from 'rxjs';
import { BasicAuthentication } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterService implements HttpInterceptor {
  constructor(private basicAuthentication: BasicAuthentication) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthenticationToken =
      this.basicAuthentication.getAuthenticatedToken() || '';
    let basicAuthenticationUser =
      this.basicAuthentication.getAuthenticatedUser();

    if (basicAuthenticationUser && basicAuthenticationToken) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthenticationToken,
        },
      });
    }

    return next.handle(request);
  }
}
