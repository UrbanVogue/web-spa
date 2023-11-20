import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSigninRedirectCallbackComponent } from './components/app-signin-redirect-callback/app-signin-redirect-callback.component';

const routes: Routes = [
  {path: 'unauthorized', component: AppSigninRedirectCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
