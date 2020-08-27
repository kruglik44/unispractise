import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { UsernameService } from '../shared/username.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  guestName: string;
  constructor(private authService: AuthService,
    private router: Router,
    private data: UsernameService){
    
  }
  logout(){
    this.router.navigate(['/']);
    this.data.changeMessage('');
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(guestName => this.guestName = guestName);
  }
}
