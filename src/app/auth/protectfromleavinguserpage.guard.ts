import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { UserComponent } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class ProtectfromleavinguserpageGuard implements CanDeactivate<UserComponent> {
  constructor(private authService: AuthService){

  }
  canDeactivate(
    component: UserComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.showLeaveStatus();
  }
  
}
