import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';
@Component({
  selector: 'app-signin-redirect-callback',
  template: `<div></div>`
})
export class AppSigninRedirectCallbackComponent implements OnInit {
  constructor(private readonly _authService: AuthService) { }
  ngOnInit(): void {
   this._authService.login();
  }
}