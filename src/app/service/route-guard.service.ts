import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthentication } from './basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router,
    private basicAuthService: BasicAuthentication
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.basicAuthService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
