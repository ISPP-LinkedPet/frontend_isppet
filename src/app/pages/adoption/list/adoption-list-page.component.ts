import { Component, OnInit } from '@angular/core';

import {AdoptionService} from '../../../services/adoption/adoption.service';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from "@angular/router";
import {trimTrailingNulls} from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-adoption-list-page',
  templateUrl: './adoption-list-page.component.html',
  styleUrls: ['./adoption-list-page.component.css']
})
export class AdoptionListPageComponent implements OnInit {
  isLeftVisible = true;
  selectedAdoption: any;
  selectedShelter: any = null;
  constructor(private adoptionService: AdoptionService, public configService: ConfigService, private router: Router) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  ngOnInit(): void {
    if (!(this.rol === 'shelter' || this.rol === 'particular')) {
      this.router.navigate(['/']);
    }
  }

  loadAdoption(id: string) {
    this.adoptionService.getAdoptionById(localStorage.getItem('access_token'), id)
        .then(res => this.selectedAdoption = res.adoption).then(res => {
            if (this.selectedAdoption.shelter_id !== null) {
                this.adoptionService.getShelterById(localStorage.getItem('access_token'), this.selectedAdoption.shelter_id)
                    .then(res2 => this.selectedShelter = res2.shelter);
            } else {
              this.selectedShelter = null;
            }});
  }

}
