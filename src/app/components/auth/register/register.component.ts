import { Component, OnInit } from '@angular/core';

import {HomeComponent} from '../../../pages/home/home.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public homeComponent: HomeComponent) { }

  ngOnInit(): void {
  }

}
