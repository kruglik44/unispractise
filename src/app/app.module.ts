import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { DepartmentComponent } from './department/department.component';
import { BusynessComponent } from './busyness/busyness.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { ProjectElementComponent } from './project-element/project-element.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from "@angular/forms";
import { PercentPipe } from '../app/project/percent.pipe';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { WrongpasswordComponent } from './wrongpassword/wrongpassword.component';
import { AreyousureComponent } from './areyousure/areyousure.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    BusynessComponent,
    UserComponent,
    ProjectComponent,
    ProjectElementComponent,
    UserEditComponent,
    PercentPipe,
    LoginComponent,
    WrongpasswordComponent,
    AreyousureComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatDividerModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
