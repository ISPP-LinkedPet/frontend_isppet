import { Component, OnInit } from '@angular/core';
import {BreedingListPageComponent} from '../../../pages/breeding/list/breeding-list-page.component'
import {BreedingService} from 'src/app/services/breeding/breeding.service'
import { environment } from 'src/environments/environment';
import {Router} from "@angular/router";
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-breeding-display',
  templateUrl: './breeding-display.component.html',
  styleUrls: ['./breeding-display.component.css']
})


export class BreedingDisplayComponent implements OnInit {

  env = environment.endpoint;
  constructor(public breedingListPageComponent: BreedingListPageComponent, public breedingService: BreedingService, private router: Router
    , public configService: ConfigService ) { }

  ngOnInit(): void {
  }

  onSubmit(id: string){
    this.breedingService
        .createRequest(id)
        .then(res => {
          alert("¡Has realizado una petición a esta oferta! \n En la siguiente página podrás revisar si el usuario la ha aceptado")
          this.router.navigate(['/request/accepted/created']);
        })
        .catch(error => {
        });
  }

  backToTheList(){
    this.breedingListPageComponent.isLeftVisible = !this.breedingListPageComponent.isLeftVisible;
    this.breedingListPageComponent.hasreq = false;
  }

}