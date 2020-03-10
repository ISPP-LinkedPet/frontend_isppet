import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {UserAccount} from '../../../models/user_account/user-account'

import {LoginService} from '../../../services/login/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  isValid = true;
  user_account = new UserAccount();
  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    username: new FormControl(this.user_account.user_name, [
      Validators.required]),
    password: new FormControl(this.user_account.password, 
    [Validators.required]),
  });

  onSubmit() {
    console.log(this.profileForm.value); 
    this.isValid = this.profileForm.valid;
    console.log(this.isValid)

    // send credential to backend
    this.loginService.sendCredentials(this.profileForm);

  }



}
