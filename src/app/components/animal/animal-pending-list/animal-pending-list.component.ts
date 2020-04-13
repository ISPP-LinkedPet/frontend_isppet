import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ConfigService } from '../../../services/config/config.service'
import { AnimalService } from '../../../services/animal/animal.service'
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { faCat, faDog, faHorse, faInfoCircle, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-animal-pending-list',
  templateUrl: './animal-pending-list.component.html',
  styleUrls: ['./animal-pending-list.component.css']
})
export class AnimalPendingListComponent implements OnInit {

  // icons
  faCat = faCat;
  faDog = faDog;
  faHorse = faHorse;
  faInfoCircle = faInfoCircle;
  faVenus = faVenus;
  faMars = faMars;

  animals = new Array();
  returnedAnimals = new Array();
  env = environment.endpoint;
  // pagginations
  itemsPerPage = 5;
  constructor(private animalService: AnimalService, private router: Router, public configService: ConfigService) { }

  ngOnInit(): void {
    this.animalService.getPetsInRevision().then(res => {
      res.forEach(animalAd => {
        this.animals.push(animalAd);
      });
      this.returnedAnimals = this.animals.slice(0, this.itemsPerPage);
    });

  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedAnimals = this.animals.slice(startItem, endItem);
  }
}
