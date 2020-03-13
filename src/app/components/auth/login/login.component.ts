import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {UserAccount} from '../../../models/user_account/user-account';
import {LoginService} from '../../../services/login/login.service';
import {HomeComponent} from '../../../pages/home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, public homeComponent: HomeComponent) { }
  isValid = true;
  userAccount = new UserAccount();
  profileForm = new FormGroup({
    username: new FormControl(this.userAccount.user_name, [
      Validators.required]),
    password: new FormControl(this.userAccount.password,
    [Validators.required]),
  });
  ngOnInit(): void {
    this.homeComponent.viewMode = 'login';
  }

  register() {
    this.homeComponent.viewMode = 'register';

  }

  onSubmit() {
    this.isValid = this.profileForm.valid;

    // send credential to backend
    this.loginService.sendCredentials(this.profileForm).then(res =>
      localStorage.setItem('access_token', res.access_token)
    ).catch( error => {

    });
  }



}
