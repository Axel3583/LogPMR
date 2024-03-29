import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authentifaction/auth.service';

@Component({
  selector: 'logpmr-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) {}
  
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])
  });

  onSubmit() {
    const { email, password } = this.registrationForm.value;
    // if (!this.registrationForm.valid) alert('Formulaire Invalide');
    console.log(this.registrationForm.value)
    if (email && password) {
      this.auth.login(email, password).subscribe({
        next: (response) => {
          console.log('User login successfully', response);
          this.router.navigate(['home']);
        },
      });
    }
  }
}
