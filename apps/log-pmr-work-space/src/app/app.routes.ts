import { Route } from '@angular/router';
import { HomeDetailsComponent } from './feature/components/home-details/home-details.component';
import { HomePaymentComponent } from './feature/components/home-payment/home-payment.component';
import { MainComponent } from './main/components/main/main.component';
import { LoginComponent } from './main/components/login/login.component';
import { RegisterComponent } from './main/components/register/register.component';
import { HomeComponent } from './feature/components/home/home.component';

export const appRoutes: Route[] = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-details', component: HomeDetailsComponent },
  { path: 'home-payment', component: HomePaymentComponent },
  { path: '**', redirectTo: '' },
];
