import { Component, OnInit, HostListener, ElementRef} from '@angular/core';
import { userlogged } from 'src/app/services/config/config.service'

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
   
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(userlogged.role)
  }

}
