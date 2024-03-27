import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CustomHeaderComponent } from './core/components/custom-header/custom-header.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, [FooterComponent, CustomHeaderComponent]],
  selector: 'logpmr-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'log-pmr-work-space';

  constructor(private router: Router) {}

  isHomePage(): boolean {
    return this.router.url === '/';
  }
  
}
