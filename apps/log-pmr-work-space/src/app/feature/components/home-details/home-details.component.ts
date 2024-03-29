import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentifaction/auth.service';

@Component({
  selector: 'logpmr-home-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.scss',
})
export class HomeDetailsComponent {

  constructor(private router: Router, private authService: AuthService) {}


  goToReservation() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home-payment']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
