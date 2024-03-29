import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CustomHeaderComponent } from './core/components/custom-header/custom-header.component';
import { CustomHeaderLoginComponent } from './core/components/custom-header-login/custom-header-login.component';
import { AuthService } from './services/authentifaction/auth.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    [FooterComponent, [CustomHeaderComponent, CustomHeaderLoginComponent]],
  ],
  selector: 'logpmr-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'log-pmr-work-space';

  constructor(private router: Router, public authService: AuthService) {}

  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
