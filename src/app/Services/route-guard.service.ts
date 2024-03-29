import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private authentication: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authentication.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }

  // isAdmin(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.authentication.isAdmin()) {
  //     return true;
  //   }
  //   this.router.navigate(['']);
  //   return false;
  // }
}

