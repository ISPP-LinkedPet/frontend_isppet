import { Component, OnInit } from '@angular/core';
import { BreedingService } from '../../../services/breeding/breeding.service';
import { Breeding } from '../../../models/breeding/breeding';

@Component({
  selector: 'app-breeding-list',
  templateUrl: './breeding-list.component.html',
  styleUrls: ['./breeding-list.component.css']
})
export class BreedingListComponent implements OnInit {
  breedings: Breeding[] = [];
  prueba: any = null;

  constructor(
      private breedingService: BreedingService,
  ) {
  }

  ngOnInit(): void {
      const token = localStorage.getItem('access_token');
      this.breedingService.getAllBreedings().then(res => res.forEach(breedingAd => {
        this.breedings.push(breedingAd);
      }));
      console.log(this.breedings);
  }
}
