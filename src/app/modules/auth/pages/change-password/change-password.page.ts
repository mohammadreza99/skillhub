import {Component, OnInit} from '@angular/core';
import {LanguageChecker} from "@core/utils";
import {AuthService} from "@core/http";
import {Router} from "@angular/router";
import {AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'ng-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss']
})
export class ChangePasswordPage extends LanguageChecker implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    super();
  }

  form = new UntypedFormGroup({
    newPassword: new UntypedFormControl(null, [Validators.required]),
    confirmPassword: new UntypedFormControl(null, [Validators.required]),
  }, {validators: this.checkPasswords});

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


  checkPasswords(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('newPassword').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : {notSame: true};
  }
}
