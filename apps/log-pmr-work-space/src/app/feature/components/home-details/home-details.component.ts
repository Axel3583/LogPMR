import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'logpmr-home-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.scss',
})
export class HomeDetailsComponent {

  constructor(private router: Router) {}


  goToReservation() {
    this.router.navigate(["home-payment"]);
  }
}
