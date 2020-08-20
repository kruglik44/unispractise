import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../shared/getInfo.service';
import {Project} from '../shared/project.model'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.css']
})
export class ProjectElementComponent implements OnInit {
  project: Project;
  show : boolean = false;
  constructor(private getInfoService: GetInfoService,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.project = this.getInfoService.getProject(+params.get('projectId'));
     });
   }

   setChanges(){
    this.show = !this.show;
    this.authService.changeLeaveStatus();
   }

  }


