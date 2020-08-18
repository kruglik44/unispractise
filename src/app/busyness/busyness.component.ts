import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../shared/getInfo.service';
import { Employee } from '../shared/employee.model'




@Component({
  selector: 'app-busyness',
  templateUrl: './busyness.component.html',
  styleUrls: ['./busyness.component.css']
})
export class BusynessComponent implements OnInit {
  panelOpenState = false;
  userTable: any = [];
  constructor(private getInfoService: GetInfoService) { }
  displayedColumns: string[] = ['id', 'name', 'group', 'leader', 'position'];


  ngOnInit(){
    this.userTable = this.getInfoService.search();
  }

}
