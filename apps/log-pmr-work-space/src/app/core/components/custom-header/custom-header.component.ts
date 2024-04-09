import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'logpmr-custom-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-header.component.html',
  styleUrl: './custom-header.component.scss',
})
export class CustomHeaderComponent {
  constructor(private router: Router) {}

  isload = false;

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }

  isDate() {
    return !!this.isload
  }
}
