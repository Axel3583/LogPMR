import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'logpmr-custom-header-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-header-login.component.html',
  styleUrl: './custom-header-login.component.scss',
})
export class CustomHeaderLoginComponent {

  isDropdownOpen = false;

  constructor(private router: Router){}

  redirectToHome() {
    this.router.navigate(['home'])
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen)
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }
}
