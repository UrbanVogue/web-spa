import { Injectable } from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {Subject, map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthorized = this.oidcSecurityService.isAuthenticated$.pipe(map((isAuthenticated) => isAuthenticated.isAuthenticated));

  constructor(public oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.checkAuth().pipe(
      tap((auth) => {
        console.log("Authorized", auth);
      })
    )
      .subscribe();
  }
  
  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    return this.oidcSecurityService.logoff()
      .pipe(
        tap(() => {
          console.log("Unauthorized");
        })
      ).subscribe();
  }
}
