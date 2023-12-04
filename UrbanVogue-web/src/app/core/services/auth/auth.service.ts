import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserDetails } from '../../models/user-profile';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthorized$: Observable<boolean>;
  public userProfile$!: Observable<UserDetails>;

  constructor(public oidcSecurityService: OidcSecurityService) {
    this.isAuthorized$ = this.oidcSecurityService.checkAuth().pipe(
      map((isAuthenticated) => isAuthenticated.isAuthenticated)
    );
    this.userProfile$ = this.oidcSecurityService.userData$.pipe(
      map((authResult) => authResult.userData as UserDetails)
    );
  }
  
  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    return this.oidcSecurityService.logoff();
  }
}
