import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'logpmr-secondly-section-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondly-section-home.component.html',
  styleUrl: './secondly-section-home.component.scss',
})
export class SecondlySectionHomeComponent {

 constructor(private router: Router) {}

 goToHomePage() {
   this.router.navigate(['home'])
 }
}
