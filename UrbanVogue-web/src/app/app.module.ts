import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor, AuthModule, LogLevel} from "angular-auth-oidc-client";
import {ProductsModule} from "./modules/products/products.module";
import {ProductCartModule} from "./modules/product-cart/product-cart.module";
import { ProfileModule } from './modules/profile/profile.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ProductsModule,
    ProfileModule,
    AuthModule.forRoot({
      config: {
        authority: 'http://localhost:8010',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'Angular-Client',
        scope: 'openid profile',
        responseType: 'code',
        logLevel: LogLevel.Debug,
        secureRoutes: ['http://localhost:8010/user'],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
