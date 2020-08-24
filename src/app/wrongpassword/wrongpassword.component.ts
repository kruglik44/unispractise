import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-wrongpassword',
  templateUrl: './wrongpassword.component.html',
  styleUrls: ['./wrongpassword.component.css']
})
export class WrongpasswordComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.close.emit();
  }

}
