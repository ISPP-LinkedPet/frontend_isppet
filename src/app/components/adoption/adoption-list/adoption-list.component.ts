import { Component, OnInit } from '@angular/core';

import {AdoptionService} from '../../../services/adoption/adoption.service';
import {AdoptionListPageComponent} from '../../../pages/adoption/list/adoption-list-page.component'
import {AdoptionDisplayComponent} from '../adoption-display/adoption-display.component';
import {environment} from '../../../../environments/environment';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-adoption-list',
  templateUrl: './adoption-list.component.html',
  styleUrls: ['./adoption-list.component.css']
})
export class AdoptionListComponent implements OnInit {
  adoptions = new Array();
  env = environment.endpoint;
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';
  public adoptionDisplayComponent: AdoptionDisplayComponent;

  constructor(public configService: ConfigService,private adoptionService: AdoptionService, public adoptionListPageComponent: AdoptionListPageComponent) { }

  ngOnInit(): void {

    if(this.rol=="shelter"){
      this.adoptionService.getAdoptionByShelterLogged().then(res=>res.forEach(element=> {
        this.adoptions.push(element)
      }))
    }else{
      this.adoptionService.getAllAdoptions(localStorage.getItem('access_token')).then(res=>res.forEach(element => {
        this.adoptions.push(element)
      }))
    }
  }

  viewDetails(id: string) {
    this.adoptionListPageComponent.isLeftVisible = !this.adoptionListPageComponent.isLeftVisible;
    this.adoptionListPageComponent.loadAdoption(id);
    window.scroll(0,0);
  }

}
