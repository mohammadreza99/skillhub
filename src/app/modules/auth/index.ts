import {Type} from '@angular/core';
import {LoginPage} from './pages/login/login.page';
import {RegisterPage} from '@modules/auth/pages/register/register.page';
import {ResetPasswordPage} from "@modules/auth/pages/reset-password/reset-password.page";
import {ChangePasswordPage} from "@modules/auth/pages/change-password/change-password.page";

export const COMPONENTS: Type<any>[] = [
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  ChangePasswordPage
];
