import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), 
    importProvidersFrom(
      JwtModule.forRoot({
          config: {
              tokenGetter: tokenGetter,
              allowedDomains: ["http://localhost:3000"],
              disallowedRoutes: ["http://localhost:3000/login/"],
          },
      }),
  ),
    provideHttpClient(withInterceptorsFromDi()),],
};
