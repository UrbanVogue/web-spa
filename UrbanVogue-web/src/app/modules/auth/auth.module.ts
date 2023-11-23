import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AppSigninRedirectCallbackComponent } from './components/app-signin-redirect-callback/app-signin-redirect-callback.component';


@NgModule({
  declarations: [
    AppSigninRedirectCallbackComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
