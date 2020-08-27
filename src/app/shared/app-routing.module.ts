import { Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import { BusynessComponent } from '../busyness/busyness.component';
import { UserComponent } from '../user/user.component';
import { ProjectElementComponent } from '../project-element/project-element.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../login/login.component';
import { IsTeamleadGuard } from '../auth/is-teamlead.guard';
import { ProtectfromleavingGuard } from '../auth/protectfromleaving.guard';
import { ProtectfromleavinguserpageGuard } from '../auth/protectfromleavinguserpage.guard';
import { ProtectfromleavingprojectsguardGuard } from '../auth/protectfromleavingprojectsguard.guard';
import { Error404Component } from '../error404/error404.component';



const appRoutes: Routes = [    
{path: '', component: LoginComponent},
{path: 'department', component: DepartmentComponent, canActivate: [AuthGuard]},
{path: 'busyness', component: BusynessComponent, canActivate: [AuthGuard]}, 
{path: 'users/:userId', component: UserComponent, canDeactivate: [ProtectfromleavinguserpageGuard, ProtectfromleavingprojectsguardGuard]},
{path: 'users/:userId/projects/:projectId', component: ProjectElementComponent, canActivate: [IsTeamleadGuard], canDeactivate:[ProtectfromleavingGuard]},
{path: '**', component: Error404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
}