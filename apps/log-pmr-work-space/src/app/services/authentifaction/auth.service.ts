import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserModel } from 'src/app/models/User.model';
import { environment } from 'src/environments/environment.dev';
import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private apiUrl = environment.backendUrl;

  register(email: string, password: string): Observable<UserModel> {
    const body = { email, password };
    console.log(body);
    return this.httpClient.post<UserModel>(`${this.apiUrl}/register`, body);
  }

  login(email: string, password: string): Observable<UserModel> {
    const body = { email, password };
    return this.httpClient.post<UserModel>(`${this.apiUrl}/login`, body).pipe(
      tap(data => {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
        } else {
          console.error('Le token est absent de la réponse du serveur.');
        }
      })
    );
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode.jwtDecode(token);
      const now = Date.now().valueOf() / 1000;
     
      if (typeof decoded.exp !== "undefined" && decoded.exp < now) {
        console.warn(`Token has expired.`);
        return true;
      }
  
      return false;
    } catch (error) {
      console.error(`Failed to decode token: ${error}`);
      return true;
    }
  }
  
  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    return !!token && !this.isTokenExpired(token);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('accessToken');
    return !!token;
  }
}
