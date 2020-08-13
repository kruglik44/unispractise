import { Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';
import { BusynessComponent } from '../busyness/busyness.component';
import { UserComponent } from '../user/user.component';
import { ProjectElementComponent } from '../project-element/project-element.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../login/login.component';


const appRoutes: Routes = [    
{path: '', component: LoginComponent},
{path: 'department', component: DepartmentComponent, canActivate: [AuthGuard]},
{path: 'busyness', component: BusynessComponent, canActivate: [AuthGuard]},
{path: 'users/:userId', component: UserComponent},
{path: 'users/:userId/projects/:projectId', component: ProjectElementComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
}