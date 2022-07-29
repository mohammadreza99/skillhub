import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPage} from './pages/login/login.page';
import {RegisterPage} from '@modules/auth/pages/register/register.page';
import {ChangePasswordPage} from "@modules/auth/pages/change-password/change-password.page";
import {ResetPasswordPage} from "@modules/auth/pages/reset-password/reset-password.page";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'change-password',
    component: ChangePasswordPage,
  },
  {
    path: 'reset-password',
    component: ResetPasswordPage,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
