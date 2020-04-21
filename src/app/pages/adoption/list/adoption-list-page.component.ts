import { Component, OnInit } from '@angular/core';
import {AdoptionService} from '../../../services/adoption/adoption.service';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from '@angular/router';
import { RequestPublicationService } from 'src/app/services/requestPublication/request-publication.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-adoption-list-page',
  templateUrl: './adoption-list-page.component.html',
  styleUrls: ['./adoption-list-page.component.css']
})
export class AdoptionListPageComponent implements OnInit {
  adoptions = new Array();
  isLeftVisible = true;
  selectedAdoption: any;
  selectedShelter: any = null;
  selectedParticular: any = null;
  constructor(private adoptionService: AdoptionService, public configService: ConfigService, private router: Router, private profiletService: ProfileService) { }

  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  ngOnInit(): void {
    if (!(this.rol === 'shelter' || this.rol === 'particular')) {
      this.router.navigate(['/']);
    }

    if(this.rol=="shelter"){
      this.adoptionService.getAdoptionByShelterLogged().then(res=>res.forEach(element=> {
        this.adoptions.push(element)
      }))
    }else{
      this.adoptionService.getAllAdoptions().then(res=>res.forEach(element => {
        this.adoptions.push(element)
      }))
    }
  }

  loadAdoption(id: string) {
    this.adoptionService.getAdoptionById(localStorage.getItem('access_token'), id)
        .then(res => this.selectedAdoption = res.adoption).then(res => {
          console.log(this.selectedAdoption)
            if (this.selectedAdoption.shelter_id !== null) {
                this.adoptionService.getShelterById(localStorage.getItem('access_token'), this.selectedAdoption.shelter_id)
                    .then(res2 => this.selectedShelter = res2.shelter);
            } else {
                this.adoptionService.getPublication(this.selectedAdoption.publication_id).then(res=>{
                  this.profiletService.getParticularById(res.publication.particular_id).then(res2=>this.selectedParticular = res2.particular)
                });

            }});
  }

}
