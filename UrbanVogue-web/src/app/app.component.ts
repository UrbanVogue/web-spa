import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isUserAuthorized: boolean = false;

  constructor(public readonly _authService: AuthService) {
    this._authService.isAuthorized.subscribe((res) => {
      this.isUserAuthorized = res;
      console.log(res);
    });
  }

  logout() {
    this._authService.logout();
  }

  login() {
    this._authService.login();
  }
}
