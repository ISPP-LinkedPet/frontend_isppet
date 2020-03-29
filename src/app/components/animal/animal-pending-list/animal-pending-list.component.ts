import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';
import {Router} from "@angular/router";
import { ConfigService } from '../../../services/config/config.service'
import { AnimalService } from '../../../services/animal/animal.service'

@Component({
  selector: 'app-animal-pending-list',
  templateUrl: './animal-pending-list.component.html',
  styleUrls: ['./animal-pending-list.component.css']
})
export class AnimalPendingListComponent implements OnInit {
  animals= new Array();
  env = environment.endpoint;

  constructor(private animalService: AnimalService, private router: Router, public configService:ConfigService) { }

  ngOnInit(): void {
    this.animalService.getPendingAnimals().then(res => res.forEach(animalAd => {
      this.animals.push(animalAd);
    }));
  }

}
