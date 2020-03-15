import { Component, OnInit } from '@angular/core';

import {HomeComponent} from '../../../pages/home/home.component';
import { LoginRegisterComponent } from 'src/app/pages/login-register/login-register.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public homeComponent: LoginRegisterComponent) { }

  ngOnInit(): void {
  }

}
