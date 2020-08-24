import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../shared/getInfo.service';
import {Project} from '../shared/project.model'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private getProjectsService: GetInfoService,
    private route: ActivatedRoute,
    private authService: AuthService) { }
  projects = [];
  role: string = '';
  show: boolean = false;
  projectName: string = "";
  projectId: number;
  projectPosition: string = "";
  projectLeader: string = "";
  projectComments: string = "";
  projectPart: string = "";
  userId: any;

  addProject(){
    this.projects.push(new Project(this.projectId, this.projectName, this.projectLeader, this.projectComments,
      this.projectPart, this.projectPosition));
  }

  deleteProject(num: number){
    console.log(num);
    this.projects.splice(num, 1);
  }

  showMenu(){
    this.show = !this.show;
    this.authService.changeLeaveProjectStatus();
  };

  ngOnInit() {
    this.projects = this.getProjectsService.searchProject();
    this.role = this.authService.showRole();
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId')
      console.log(this.userId);
     });
  }

}
