import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { ConfigService } from '../../../services/config/config.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-adoption-personal-list',
  templateUrl: './adoption-personal-list.component.html',
  styleUrls: ['./adoption-personal-list.component.css']
})
export class AdoptionPersonalListComponent implements OnInit {
  returnedAdoptions = new Array();
  itemsPerPage = 5;
  personalAdoptions = new Array();
  env = environment.endpoint;

  rol = null;

  constructor(private adoptionService: AdoptionService, public configService: ConfigService) { }
  ngOnInit(): void {
    const userLogged = this.configService.getUserLogged();
    this.rol = userLogged.role;
    const id = userLogged.id;
    this.adoptionService.getPersonalAdoptions(id).then(res => {
      res.forEach(adoptionAd => {
        this.personalAdoptions.push(adoptionAd);
      });
      this.returnedAdoptions = this.personalAdoptions.slice(0, this.itemsPerPage);

    });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedAdoptions = this.personalAdoptions.slice(startItem, endItem);
  }
}
