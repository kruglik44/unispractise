import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }
  showInfo(){
    if (this.email === 'admin' && this.password === 'admin'){
      this.authService.setToTrue(); 
      this.router.navigate(['/department'])     
    }
    if (this.email ==='user' && this.password === 'user'){
      this.authService.setToUser();
      this.router.navigate(['/department']); 
    }
    if (this.email === 'teamlead' && this.password === 'teamlead'){
      this.authService.setToTeamLead();
      this.router.navigate(['/department']);
    }
  }
}

