import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { ConfigService } from '../../../services/config/config.service'

@Component({
  selector: 'app-adoption-personal-list',
  templateUrl: './adoption-personal-list.component.html',
  styleUrls: ['./adoption-personal-list.component.css']
})
export class AdoptionPersonalListComponent implements OnInit {

  personalAdoptions = new Array();
  env = environment.endpoint;

  rol = null;

  constructor(private adoptionService: AdoptionService, public configService:ConfigService) { }
  ngOnInit(): void {
    const userLogged = this.configService.getUserLogged()
    this.rol = userLogged.role;
    const id = userLogged.id;
    this.adoptionService.getPersonalAdoptions(id).then(res => res.forEach(adoptionAd => {
      this.personalAdoptions.push(adoptionAd);
    }));
  }

}
