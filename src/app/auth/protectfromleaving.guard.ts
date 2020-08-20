import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { ProjectElementComponent } from '../project-element/project-element.component';

@Injectable({
  providedIn: 'root'
})
export class ProtectfromleavingGuard implements CanDeactivate<ProjectElementComponent> {
  constructor(private authService: AuthService){

  }
  canDeactivate(
    component: ProjectElementComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.showLeaveStatus();
    
  }
  
}
