import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/authentifaction/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'logpmr-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, [HttpClientModule]],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router) {}

  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const { email, password } = this.registrationForm.value;
    console.log(this.registrationForm.valid);
    if (!this.registrationForm.valid)
      alert(
        'Formulaire Invalide, veuillez à saisir un email valide et un mot de passe de 6 caractères'
      );
    if (!this.passwordsMatch()) return;
    if (email && password) {
      this.auth.register(email, password).subscribe({
        next: (response) => {
          console.log('User registered successfully', response);
          this.router.navigate(['home']);
        },
      });
    }
  }

  private passwordsMatch(): boolean {
    const password = this.registrationForm.value.password;
    const confirmPassword =
      this.registrationForm.controls.confirmPassword.value;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
    return true;
  }
}
