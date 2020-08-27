import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UsernameService } from '../shared/username.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  guestName: string;
  error: string;
  constructor(private authService: AuthService,
              private router: Router,
              public dialog: MatDialog,
              private data: UsernameService) { }

              openDialog() {
                const dialogRef = this.dialog.open(DialogContentExampleDialog);
            
                dialogRef.afterClosed().subscribe(result => {
                  console.log(`Dialog result: ${result}`);
                });
              }

  ngOnInit() {
    this.data.currentMessage.subscribe(guestName => this.guestName = guestName);
  }

  showInfo(){
    this.data.changeMessage(this.email);
    if (this.email === 'admin' && this.password === 'admin'){
      this.authService.setToTrue();
      this.authService.setToTeamLead();
      this.authService.changeToAdmin();
      this.router.navigate(['/department'])     
    } else if (this.email ==='user' && this.password === 'user'){
      this.authService.setToTrue();
      this.authService.changeToUser();
      this.router.navigate(['/department']); 
    } else if (this.email === 'teamlead' && this.password === 'teamlead'){
      this.authService.setToTrue();
      this.authService.changeToTeamLead();
      this.router.navigate(['/department']);
    }
    else this.openDialog();
  }

  onHandleError(){
    this.error = null;
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}