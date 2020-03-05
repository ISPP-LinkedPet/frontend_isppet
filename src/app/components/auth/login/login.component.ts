import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  isValid = true;
  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.required]),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);  // { first: '', last: '' }
    this.isValid = this.profileForm.valid;
    console.log(this.isValid)  // false
  }

}
