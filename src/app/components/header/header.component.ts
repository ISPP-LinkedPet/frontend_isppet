import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import {Router} from '@angular/router';
import { BreedingService } from '../../services/breeding/breeding.service';
import { AnimalService } from '../../services/animal/animal.service';
import {environment} from '../../../environments/environment';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { RequestBreedingService } from 'src/app/services/requestBreeding/request-breeding.service';
import { faHome, faPaw, faHeart, faStethoscope, faSignOutAlt, faSignInAlt, faBalanceScale, faEnvelope, faCat } from '@fortawesome/free-solid-svg-icons';

import {BreedingListPageComponent} from './../../pages/breeding/list/breeding-list-page.component';
import { Animal } from 'src/app/models/animal/animal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [

  ]
})
export class HeaderComponent implements OnInit {

  //icons
  faHome = faHome;
  faPaw = faPaw;
  faHeart= faHeart;
  faStethoscope = faStethoscope;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
  faBalanceScale = faBalanceScale;
  faEnvelope = faEnvelope;
  faCat = faCat;

  constructor(public  configService: ConfigService,private router: Router, public breedingListPageComponent: BreedingListPageComponent,
    private requestBreedingService: RequestBreedingService, private breedingService: BreedingService, private adoptionService: AdoptionService,
    private animalService: AnimalService) { }

  //user
  userlogged = this.configService.getUserLogged();
  user : any;
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';

  // utiles
  requests = new Array();
  breedings = new Array();
  adoptions = new Array();
  animals = new Array();

  env = environment.endpoint

  ngOnInit(): void {
    if(this.rol == 'particular'){
      this.requestBreedingService.getUserPendingBreedings().then(res => {
        res.forEach(element => {
          this.requests.push(element);
        });
      });
    }

    if(this.rol == 'moderator'){
      this.breedingService.getPendingBreedings().then(res => {
        res.forEach(breedingAd => {
          this.breedings.push(breedingAd);
        });
      });

      this.adoptionService.getPendingAdoptions().then(res => {
        res.forEach(adoptionAd => {
          this.adoptions.push(adoptionAd);
        });
      });

      this.animalService.getPetsInRevision().then(res => res.forEach(animalAd => {
        this.animals.push(animalAd);
      }));
    }

    if(this.rol !='disconnected'){
      this.configService.getUser().then(res => {
        this.user = res;
      });
    }
  }

  disconnect(){
    localStorage.removeItem('access_token')
    this.rol = 'disconnected'
    this.router.navigate(['/'])
   // location.reload()
  }

  breedingList(){
    this.breedingListPageComponent.isLeftVisible = true;
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
