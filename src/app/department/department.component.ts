import { Component, OnInit } from '@angular/core';
import {GetInfoService} from '../shared/getInfo.service'


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  response: any;
  userTable = [];
  constructor(private getInfoService: GetInfoService) { 
  }
 
  ngOnInit() {
    this.userTable = this.getInfoService.search();
  }
}

