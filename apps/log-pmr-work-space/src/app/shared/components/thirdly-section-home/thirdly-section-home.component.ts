import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRateComponent } from './card-rate/card-rate.component';

@Component({
  selector: 'logpmr-thirdly-section-home',
  standalone: true,
  imports: [CommonModule, CardRateComponent],
  templateUrl: './thirdly-section-home.component.html',
  styleUrl: './thirdly-section-home.component.scss',
})
export class ThirdlySectionHomeComponent {}
