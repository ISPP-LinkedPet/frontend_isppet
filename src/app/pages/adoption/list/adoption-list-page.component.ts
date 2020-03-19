import { Component, OnInit } from '@angular/core';

import {AdoptionService} from '../../../services/adoption/adoption.service';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-adoption-list-page',
  templateUrl: './adoption-list-page.component.html',
  styleUrls: ['./adoption-list-page.component.css']
})
export class AdoptionListPageComponent implements OnInit {
  isLeftVisible = true;
  selectedAdoption:any;
  selectedShelter:any;
  constructor(private adoptionService: AdoptionService, private configService: ConfigService, private router: Router) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  ngOnInit(): void {
    if(!(this.rol=='shelter' || this.rol=='particular')){
      this.router.navigate(['/'])
    }
  }

  loadAdoption(id: string){
    this.adoptionService.getAdoptionById(localStorage.getItem('access_token'), id).then(res=>this.selectedAdoption = res.adoption).then(res=>
      this.adoptionService.getShelterById(localStorage.getItem('access_token'), this.selectedAdoption.shelter_id).then(res=>this.selectedShelter = res.shelter))
  }

}
