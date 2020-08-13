import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Employee} from './employee.model';
import {Project} from './project.model'

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

    constructor(private http: HttpClient,
                private httpProject: HttpClient) {
        this.search();
    }
    userTable = [];
    projectsList = [];
    response: any;

    search(){
        this.http.get("http://localhost:3000/employees")
      .subscribe((response) =>{
        this.response = response;
        for (let i = 0; i < this.response.length; i++){
          this.userTable[i] = new Employee(
          response[i].id,
          response[i].Name,
          response[i].group,
          response[i].position,
          response[i].leader,
          response[i].experience,
          response[i].note,
          response[i].certificates,
          response[i].comments
        )
        }
      })
      return this.userTable;
    }
    getUser(num: number){
        return this.userTable[num];
    }

    searchProject(){
      this.httpProject.get("http://localhost:3000/projects")
        .subscribe((response) => {
        for (let i = 0; i < this.response.length; i++){
          this.projectsList[i] = new Project(
            response[i].id,
            response[i].name,
            response[i].leader,
            response[i].comments,
            response[i].part,
            response[i].position
          )
        }
        });
        return this.projectsList; 
    }

    getProject(num: number){
      return this.projectsList[num];
    }
}