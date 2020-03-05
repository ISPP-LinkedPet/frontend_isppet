import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import {UserAccount} from '../../../models/user_account/user-account'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
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
  }



}
