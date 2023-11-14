import { Injectable } from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorizedSubject: Subject<boolean> = new Subject<boolean>();

  public isAuthorized = this.isAuthorizedSubject.asObservable();

  constructor(public oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.checkAuth().pipe(
      tap((auth) => {
        this.isAuthorizedSubject.next(auth.isAuthenticated);
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
          this.isAuthorizedSubject.next(false);
          console.log("Unauthorized");
        })
      ).subscribe();
  }
}
