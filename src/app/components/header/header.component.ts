import { Component, OnInit, HostListener, ElementRef} from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from "@angular/router";

import {BreedingListPageComponent} from './../../pages/breeding/list/breeding-list-page.component';

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

  constructor(public  configService: ConfigService,private router: Router, public breedingListPageComponent: BreedingListPageComponent) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';


  ngOnInit(): void {
  }

  disconnect(){
    localStorage.setItem('access_token', '')
    this.rol = 'disconnected'
    this.router.navigate(['/'])
    location.reload()
  }

  breedingList(){
    this.breedingListPageComponent.isLeftVisible = true;
  }
}
