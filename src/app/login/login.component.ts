import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  showInfo(){
    if (this.email === 'admin' && this.password === 'admin'){
      this.authService.isLogged = true;      
    }
  }
}

