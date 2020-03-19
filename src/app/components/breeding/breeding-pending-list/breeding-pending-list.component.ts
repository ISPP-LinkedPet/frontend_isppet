import { Component, OnInit } from '@angular/core';
import { BreedingService } from '../../../services/breeding/breeding.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-breeding-pending-list',
  templateUrl: './breeding-pending-list.component.html',
  styleUrls: ['./breeding-pending-list.component.css']
})
export class BreedingPendingListComponent implements OnInit {
  breedings= new Array();
  env = environment.endpoint;

  constructor(private breedingService: BreedingService) { }

  ngOnInit(): void {
    this.breedingService.getPendingBreedings().then(res => res.forEach(breedingAd => {
      this.breedings.push(breedingAd);
    }));
  }

}
