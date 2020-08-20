import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectComponent } from '../project/project.component';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectfromleavingprojectsguardGuard implements CanDeactivate<ProjectComponent> {
  constructor(private authService: AuthService){
  }
  canDeactivate(
    component: ProjectComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.showLeaveStatus();
  }
}
