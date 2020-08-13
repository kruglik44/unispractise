import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../shared/getInfo.service';


@Component({
  selector: 'app-busyness',
  templateUrl: './busyness.component.html',
  styleUrls: ['./busyness.component.css']
})
export class BusynessComponent implements OnInit {

  userTable: any = [];
  constructor(private getInfoService: GetInfoService) { }



  ngOnInit(){
    this.userTable = this.getInfoService.search();
  }

}
