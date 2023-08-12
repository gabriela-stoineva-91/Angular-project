import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class RouteGuardGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log('CanActivate called');
    let isLoggedIn = this.userService.isSignIn();
    if (isLoggedIn) {
      return true;
    } else {
      alert('You need to sign in!');
      this.router.navigate(['/recipes']);
    }
  }
}
