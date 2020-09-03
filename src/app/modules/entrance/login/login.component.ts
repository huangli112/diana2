import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {EMAIL_REGEXP, PASSWORD_REGEXP} from '../../../core/patterns/core.pattern';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-entrance-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  private loginValue;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthenticationService
  ) {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required, Validators.pattern(EMAIL_REGEXP)]],
      password: [null, [Validators.required, Validators.pattern(PASSWORD_REGEXP), Validators.minLength(6), Validators.maxLength(20)]],
      remember: [true]
    });
  }
  ngOnInit() {
  }

  submitForm(value): void {
    const loginData = Object.assign({}, value);
    const isRemember = loginData.remember;
    if (this.validateForm.valid) {
      this.auth.getAdminData(value).subscribe(data => {
        if (isRemember) {
          // 添加到本地存储
          localStorage.setItem(this.loginValue, loginData.username);
        }
        if (data.status === 200) {
          this.router.navigate(['home']);
        }else if (data.status === 220){
        }
      });
    }
  }
}
