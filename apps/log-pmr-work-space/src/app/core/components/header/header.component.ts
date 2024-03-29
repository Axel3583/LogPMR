import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentifaction/auth.service';

@Component({
  selector: 'logpmr-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router, public authService: AuthService) {}

  
  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
