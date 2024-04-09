import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'logpmr-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0%)'
      })),
      state('out', style({
        transform: 'translateX(100%)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HomeComponent {

  isValid = false;
  showMap = false;
  showDrawer = false;
  drawerWidth = "45%";

  selectedFilters: string[] = [];
  availableFilters: string[] = [
    'Terrasse',
    'Rénové récemment',
    'Accessible aux PMR',
    'Animaux acceptés',
    'Proche des transports',
    'Parking inclus',
    'Meublé',
    'Avec jardin',
    'Sécurité 24h/24',
    'Vue panoramique'
  ];

  addFilter(filter: string) {
    if (!this.selectedFilters.includes(filter)) {
      this.selectedFilters.push(filter);
    }
  }

  removeFilter(filter: string) {
    const index = this.selectedFilters.indexOf(filter);
    if (index > -1) {
      this.selectedFilters.splice(index, 1);
    }
  }

  toggleFilter(filter: string) {
    const index = this.selectedFilters.indexOf(filter);
    if (index > -1) {
      this.selectedFilters.splice(index, 1);
    } else {
      this.selectedFilters.push(filter);
    }
  }

  displayAddModal() {
    return (this.isValid = !this.isValid);
  }

  closeModal() {
    return (this.isValid = !this.isValid);
  }

  toggleMap(shouldShow: boolean) {
    this.showMap = shouldShow;
  }

  toggleDrawer(): void {
    this.showDrawer = !this.showDrawer;
  }

  validateFilters() {
    // Logique pour gérer la validation des filtres
    // Par exemple, exécuter une recherche avec les filtres sélectionnés
    console.log('Filtres validés:', this.selectedFilters);
    // Vous pourriez ici appeler un service pour effectuer une recherche, etc.
  }
}
