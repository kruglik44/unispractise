import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  name: string;
  constructor(private authService: AuthService,
    private router: Router){
    
  }
  logout(){
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }
}
