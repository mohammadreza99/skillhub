import { Component, OnInit } from '@angular/core';
import {LanguageChecker} from "@core/utils";
import {AuthService} from "@core/http";
import {Router} from "@angular/router";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ng-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss']
})
export class ResetPasswordPage extends LanguageChecker implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    super();
  }

  form = new UntypedFormGroup({
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    password: new UntypedFormControl(null, [Validators.required]),
    rememberMe: new UntypedFormControl(false),
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.form.value;
    if (this.form.valid) {
      this.authService
        .login(formValue)
        .subscribe((res: any) => {
          if (res?.token) {
            if (formValue.rememberMe) {
              localStorage.setItem('token', res.token);
            } else {
              sessionStorage.setItem('token', res.token);
            }
            this.router.navigate(['/dashboard']);
          }
        });
    }
  }
}
