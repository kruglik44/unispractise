import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetInfoService} from '../shared/getInfo.service'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Angular', 'React', 'Vue'];
  filteredOptions: Observable<string[]>;
  user: any;
  show: boolean = false;
  constructor(private route: ActivatedRoute,
    private getInfoService: GetInfoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
     this.user = this.getInfoService.getUser(+params.get('userId'));
    });

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
}

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onChangeMode(){
    this.show = !this.show;
  }
}
