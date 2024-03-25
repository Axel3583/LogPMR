import { Route } from '@angular/router';
import { LoginComponent } from './feature/components/login/login.component';
import { RegisterComponent } from './feature/components/register/register.component';
import { MainComponent } from './feature/main/main.component';
import { HomeComponent } from './feature/components/home/home.component';
import { HomeDetailsComponent } from './feature/components/home-details/home-details.component';

export const appRoutes: Route[] = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-details', component: HomeDetailsComponent },
  { path: '**', redirectTo: '' },
];
