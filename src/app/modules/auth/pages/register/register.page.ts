import {Component, OnInit} from '@angular/core';
import {AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators} from '@angular/forms';
import {LanguageChecker} from '@core/utils';
import {AuthService} from '@core/http';
import {Router} from '@angular/router';

@Component({
  selector: 'ng-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends LanguageChecker implements OnInit {
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
        .register({
          email: formValue.email,
          password: formValue.password,
        })
        .subscribe((res: any) => {
          this.router.navigate(['/dashboard']);
        });
    }
  }

}
