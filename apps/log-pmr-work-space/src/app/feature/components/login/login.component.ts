import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'logpmr-login',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  goToHomePageAfterLogIn() {
    this.router.navigate(['/home']);
  }
  
}
