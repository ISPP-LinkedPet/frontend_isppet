import {Component, OnInit} from '@angular/core';
import {BreedingListPageComponent} from '../../../pages/breeding/list/breeding-list-page.component';
import {BreedingService} from 'src/app/services/breeding/breeding.service';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';
import {ConfigService} from 'src/app/services/config/config.service';
import swal from 'src/sweetalert';

@Component({
  selector: 'app-breeding-display',
  templateUrl: './breeding-display.component.html',
  styleUrls: ['./breeding-display.component.css']
})


export class BreedingDisplayComponent implements OnInit {

  personalBreedings = new Array();
  userlogged = this.configService.getUserLogged();
  rol: string = this.userlogged ? this.userlogged.role : 'disconnected';
  env = environment.endpoint;
  constructor(public breedingListPageComponent: BreedingListPageComponent, public breedingService: BreedingService, private router: Router,
              public configService: ConfigService) { }

  ngOnInit(): void {
    this.breedingService.getPersonalBreedings(this.userlogged.id).then(res => {
      res.forEach(breeding => {
        this.personalBreedings.push(breeding.id);
      });
    });
  }

  onSubmit(id: string){
    this.breedingService
        .createRequest(id)
        .then(res => {
          swal("Perfecto", "Petición realizada a la oferta  correctamente, en la siguiente lista verás si ha sido aceptada", "success");

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
