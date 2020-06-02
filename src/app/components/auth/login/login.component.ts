import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAccount } from '../../../models/user_account/user-account';
import { LoginService } from '../../../services/login/login.service';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, public homeComponent: LoginRegisterComponent, private router: Router) { }
  loginError = false;
  isValid = true;
  userAccount = new UserAccount();
  isValidUserName: boolean;
  isValidPassword: boolean;
  profileForm = new FormGroup({
    username: new FormControl(this.userAccount.user_name, [
      Validators.required]),
    password: new FormControl(this.userAccount.password,
      [Validators.required]),
  });
  ngOnInit(): void {
    this.homeComponent.viewMode = 'login';
    this.isValidUserName = true;
    this.isValidPassword = true;
  }

  register() {
    this.homeComponent.viewMode = 'register';
  }

  onSubmit() {
    this.isValid = true;
    this.validationFields();


    if (this.isValid) {
      // send credential to backend only if the form is valid
      this.loginService.sendCredentials(this.profileForm).then(res =>
        localStorage.setItem('access_token', res.access_token)
      ).then(res => this.loginError = false).then(res =>
        this.router.navigate(['/'])
      ).catch(error => {
        this.loginError = true;
      });
    }
  }

  validateUsername() {
    this.isValidUserName = this.profileForm.get('username').valid;
    if (!this.isValidUserName) {
      this.isValid = false;
    }
  }

  validatePassword() {
    this.isValidPassword = this.profileForm.get('password').valid;
    if (!this.isValidPassword) {
      this.isValid = false;
    }
  }
  validationFields() {
    this.validateUsername();
    this.validatePassword();
  }
}
